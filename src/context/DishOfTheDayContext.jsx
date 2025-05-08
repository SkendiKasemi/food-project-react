import { createContext, useContext, useEffect, useState } from 'react';
import { getIngredientsWithMeasures } from '../components/Main/DishOfTheDay/data/getIngredientsWithMeasures';
import { fetchMealOfTheDay } from '../data/fetchMealOfTheDay';

const DishOfTheDayContext = createContext();

const DishOfTheDayProvider = ({ children }) => {
  const [mealOfDay, setMealOfDay] = useState({});

  useEffect(() => {
    fetchMealOfTheDay(setMealOfDay);
  }, []);

  const {
    strMeal,
    strMealThumb,
    strTags,
    strYoutube,
    strInstructions,
    idMeal,
    strCategory,
    strArea,
  } = mealOfDay;

  const ingredients = getIngredientsWithMeasures(mealOfDay);

  return (
    <DishOfTheDayContext.Provider
      value={{
        strArea,
        strMeal,
        strMealThumb,
        strTags,
        strYoutube,
        strInstructions,
        idMeal,
        strCategory,
        ingredients,
      }}
    >
      {children}
    </DishOfTheDayContext.Provider>
  );
};

const useDishOfTheDay = () => {
  const context = useContext(DishOfTheDayContext);
  if (context === undefined)
    throw new Error(
      'DishOfTheDay context was used out of DishOfTheDayProvider'
    );
  return context;
};

export { DishOfTheDayProvider, useDishOfTheDay };
