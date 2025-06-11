import { createContext, useContext, useEffect, useState, useRef } from 'react';
import { fetchSearchMeal } from '../data/fetchSearchMeal';
import debounce from 'lodash.debounce';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchedText, setSearchedText] = useState('');
  const [data, setData] = useState([]);
  const controllerRef = useRef();
  const [mounted, setMounted] = useState(false);
  
  const doFetch = useRef(
    debounce((query) => {
      controllerRef.current?.abort();
      const controller = new AbortController();
      controllerRef.current = controller;
      fetchSearchMeal(query, setData, controller.signal);
    }, 300)
  ).current;

  useEffect(() => {
    setMounted(true);
    return () => {
      setSearchedText('');
    };
  }, [setSearchedText]);


  useEffect(() => {
    doFetch(searchedText.trim());

    return () => {
      controllerRef.current?.abort();
      doFetch.cancel();
    };
  }, [searchedText, doFetch]);

  return (
    <SearchContext.Provider value={{ searchedText, setSearchedText, data, mounted }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const ctx = useContext(SearchContext);
  if (!ctx) throw new Error('useSearch must be inside SearchProvider');
  return ctx;
};
