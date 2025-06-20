import { createContext, useContext, useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchSearchMeal } from '../data/fetchSearchMeal';
import debounce from 'lodash.debounce';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchedText, setSearchedText] = useState('');
  const [data, setData] = useState(null); // <— start as null
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const wrapperRef = useRef(null);
  const location = useLocation();
  const controllerRef = useRef();

  const doFetch = useRef(
    debounce(async (q) => {
      if (!q) {
        setData([]);
        setIsLoading(false);
        return;
      }
      controllerRef.current?.abort();
      setIsLoading(true);
      const ctrl = new AbortController();
      controllerRef.current = ctrl;

      try {
        await fetchSearchMeal(q, setData, ctrl.signal);
      } finally {
        setIsLoading(false);
      }
    }, 300)
  ).current;

  // mount lifecycle
  useEffect(() => {
    setMounted(true);
    return () => setSearchedText('');
  }, [setSearchedText]);

  // fetch on text change
  useEffect(() => {
    setData(null); // reset to “loading” state
    doFetch(searchedText.trim());
    return () => {
      controllerRef.current?.abort();
      doFetch.cancel();
    };
  }, [searchedText, doFetch]);

  // click-outside to close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsActive(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () =>
      document.removeEventListener('click', handleClickOutside, true);
  }, []);

  console.log(data);

  // on route change
  // useEffect(() => {
  //   // setSearchedText('');
  //   if (
  //     !location.pathname.startsWith('/search/') ||
  //     location.pathname.startsWith('/international-cuisines/')
  //   ) {
  //     setSearchedText('');
  //   }
  //   setIsActive(false);
  // }, [location.pathname, setSearchedText]);

  const registerWrapper = (node) => {
    wrapperRef.current = node;
  };

  return (
    <SearchContext.Provider
      value={{
        searchedText,
        setSearchedText,
        data,
        isLoading,
        mounted,
        isActive,
        setIsActive,
        registerWrapper,
        location,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const ctx = useContext(SearchContext);
  if (!ctx) throw new Error('useSearch must be inside SearchProvider');
  return ctx;
};
