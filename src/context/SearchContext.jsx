import { createContext, useContext, useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchSearchMeal } from '../data/fetchSearchMeal';
import debounce from 'lodash.debounce';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchedText, setSearchedText] = useState('');
  const [data, setData] = useState([]);
  const [mounted, setMounted] = useState(false);

  // NEW: active/open state
  const [isActive, setIsActive] = useState(false);

  // SINGLE ref you register from your SearchInput
  const wrapperRef = useRef(null);

  // For clearing on route change
  const location = useLocation();

  // Debounced API fetch
  const controllerRef = useRef();
  const doFetch = useRef(
    debounce((q) => {
      controllerRef.current?.abort();
      const ctrl = new AbortController();
      controllerRef.current = ctrl;
      fetchSearchMeal(q, setData, ctrl.signal);
    }, 300)
  ).current;

  // mount flag
  useEffect(() => {
    setMounted(true);
    return () => {
      setSearchedText('');
    };
  }, [setSearchedText]);

  // fetch on text change
  useEffect(() => {
    doFetch(searchedText.trim());
    return () => {
      controllerRef.current?.abort();
      doFetch.cancel();
    };
  }, [searchedText, doFetch]);

  // outside‑click → close
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

  // route change → clear & close
  useEffect(() => {
    setSearchedText('');
    setIsActive(false);
  }, [location.pathname, setSearchedText]);

  // Helper to let SearchInput register its container
  const registerWrapper = (node) => {
    wrapperRef.current = node;
  };

  return (
    <SearchContext.Provider
      value={{
        searchedText,
        setSearchedText,
        data,
        mounted,
        isActive,
        setIsActive,
        registerWrapper,
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
