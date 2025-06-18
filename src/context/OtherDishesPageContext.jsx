import { createContext, useContext, useEffect, useState } from 'react';
import { fetchCategories } from '../data/fetchCategories';

const OtherDishesPageContext = createContext();

const OtherDishesPageProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories(setCategories);
  }, []);

  return (
    <OtherDishesPageContext.Provider
      value={{
        categories,
      }}
    >
      {children}
    </OtherDishesPageContext.Provider>
  );
};

const useOtherDishesPage = () => {
  const context = useContext(OtherDishesPageContext);
  if (context === undefined)
    throw new Error(
      'OtherDishPageContext context was used out of OtherDishPageProvider'
    );

  return context;
};

export { useOtherDishesPage, OtherDishesPageProvider };
