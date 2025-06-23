import { createContext, useContext, useEffect, useState } from 'react';
import { getRandomMealsFromLetter } from '../data/getRandomMealsFromLetter';

const OtherDishesContext = createContext();

const OtherDishesProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);


  const fetchMeals = async () => {
    const today = new Date().toDateString();
    const cachedData = JSON.parse(localStorage.getItem('otherDishes'));

    if (cachedData && cachedData.date === today) {
      setMeals(cachedData.meals);
      setLoading(false);
    } else {
      const newMeals = await getRandomMealsFromLetter(10);
      setMeals(newMeals);
      localStorage.setItem(
        'otherDishes',
        JSON.stringify({ date: today, meals: newMeals })
      );
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  return (
    <OtherDishesContext.Provider
      value={{
        loading,
        meals,
      }}
    >
      {children}
    </OtherDishesContext.Provider>
  );
};

const useOtherDishes = () => {
  const context = useContext(OtherDishesContext);
  if (context === undefined)
    throw new Error(
      'OtherDishContext context was used out of OtherDishProvider'
    );

  return context;
};

export { useOtherDishes, OtherDishesProvider };
