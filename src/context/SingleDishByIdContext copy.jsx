import { createContext, useContext, useEffect, useState } from 'react';
import { getIngredientsWithMeasures } from '../components/Main/DishOfTheDay/data/getIngredientsWithMeasures';
import { fetchMealDataById } from '../data/fetchMealById';

const SingleDishByIdContext = createContext();

const SingleDishByIdProvider = ({ children }) => {
  const [id, setId] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState(() => {
    return JSON.parse(localStorage.getItem('favorites'));
  });

  useEffect(() => {
    const controller = new AbortController();
    fetchMealDataById(id, setLoading, setData);
    return () => {
      controller.abort();
    };
  }, [id, data.strArea]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(items));
  }, [items]);

  const {
    strMeal,
    strMealThumb,
    strTags,
    strYoutube,
    strInstructions,
    idMeal,
    strCategory,
    strArea,
  } = data;

  const name =
    strMeal && (strMeal.length > 16 ? strMeal.slice(0, 16) + '...' : strMeal);

  const ingredients = getIngredientsWithMeasures(data);

  const addItem = () => {
    const newItem = {
      id: idMeal,
      name: strMeal,
      image: strMealThumb,
      area: strArea,
      category: strCategory,
    };

    const isDuplicate = items.some((item) => item.name === newItem.name);
    if (isDuplicate) return;

    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    localStorage.setItem('favorites', JSON.stringify(updatedItems));
  };

  return (
    <SingleDishByIdContext.Provider
      value={{
        setId,
        addItem,
        items,
        loading,
        name,
        image: strMealThumb,
        tags: strTags,
        youtubeLink: strYoutube,
        instructions: strInstructions,
        id: idMeal,
        category: strCategory,
        area: strArea,
        ingredients,
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
