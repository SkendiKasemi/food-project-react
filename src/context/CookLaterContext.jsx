import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';

const CookLaterContext = createContext();

const CookLaterProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    try {
      const stored = localStorage.getItem('cookLater');
      const parsed = JSON.parse(stored);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('cookLater', JSON.stringify(items));
  }, [items]);

  return (
    <CookLaterContext.Provider value={{ items, setItems }}>
      {children}
    </CookLaterContext.Provider>
  );
};

const useCookLater = () => {
  const context = useContext(CookLaterContext);
  if (context === undefined)
    throw new Error('CookLaterContext was used outside of CookLaterProvider');

  return context;
};

export { CookLaterProvider, useCookLater };
