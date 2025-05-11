import { createContext, useContext, useEffect, useState } from 'react';
import { getIngredientsWithMeasures } from '../components/Main/DishOfTheDay/data/getIngredientsWithMeasures';
import { fetchMealDataById } from '../data/fetchMealById';

const SingleDishByIdContext = createContext();

const SingleDishByIdProvider = ({ children }) => {
  const [id, setId] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetchMealDataById(id, setLoading, setData);
    return () => {
      controller.abort();
    };
  }, [id]);

  const name =
    data.strMeal &&
    (data.strMeal.length > 16
      ? data.strMeal.slice(0, 16) + '...'
      : data.strMeal);

  const ingredients = getIngredientsWithMeasures(data);

  const meal = {
    ...data,
    name,
    ingredients,
  };

  return (
    <SingleDishByIdContext.Provider
      value={{
        setId,
        loading,
        meal,
        id: data.idMeal,
      }}
    >
      {children}
    </SingleDishByIdContext.Provider>
  );
};

const useDishById = () => {
  const context = useContext(SingleDishByIdContext);

  if (context === undefined) {
    throw new Error(
      'SingleDishByIdContext was used out of the SingleDishByIdProvider'
    );
  }

  return context;
};

export { SingleDishByIdProvider, useDishById };
