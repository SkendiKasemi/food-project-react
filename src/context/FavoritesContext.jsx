import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';

const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    try {
      const stored = localStorage.getItem('favorites');
      const parsed = JSON.parse(stored);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(items));
  }, [items]);


  return (
    <FavoritesContext.Provider value={{ items, setItems, isFav, setIsFav }}>
      {children}
    </FavoritesContext.Provider>
  );
};

const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined)
    throw new Error('FavContext was used outside of FavProvider');

  return context;
};

export { FavoritesProvider, useFavorites };
