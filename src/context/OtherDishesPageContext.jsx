import { createContext, useContext, useEffect, useState } from 'react';

const OtherDishesPageContext = createContext();

const OtherDishesPageProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const res = await fetch(
        'https://www.themealdb.com/api/json/v1/1/categories.php'
      );
      const data = await res.json();

      setCategories(data.categories);
    };

    fetchMeals();
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
