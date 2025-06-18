import { debounce } from 'lodash';
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { fetchSearchMeal } from '../data/fetchSearchMeal';

const SingleCategoryContext = createContext();

export const SingleCategoryProvider = ({ children }) => {
  const [category, setCategory] = useState('');
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
    setData([]);
    doFetch(category.trim());

    return () => {
      controllerRef.current?.abort();
      doFetch.cancel();
    };
  }, [category, doFetch]);

  return (
    <SingleCategoryContext.Provider
      value={{
        setCategory,
        data,
        mounted,
      }}
    >
      {children}
    </SingleCategoryContext.Provider>
  );
};

export const useSingleCategory = () => {
  const ctx = useContext(SingleCategoryContext);
  if (!ctx)
    throw new Error('useCategory must be inside SingleCategoryProvider');
  return ctx;
};
