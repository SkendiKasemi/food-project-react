import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';

const CookedMealsContext = createContext();

const CookedMealsProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    try {
      const stored = localStorage.getItem('cookedMeals');
      const parsed = JSON.parse(stored);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('cookedMeals', JSON.stringify(items));
  }, [items]);

  return (
    <CookedMealsContext.Provider value={{ items, setItems }}>
      {children}
    </CookedMealsContext.Provider>
  );
};

const useCookedMeals = () => {
  const context = useContext(CookedMealsContext);
  if (context === undefined)
    throw new Error(
      'CookedMealsContext was used outside of CookedMealsProvider'
    );

  return context;
};

export { CookedMealsProvider, useCookedMeals };
