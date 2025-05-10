import { createContext, useContext, useState, useEffect } from 'react';

export function createLocalStorageContext(storageKey) {
  const Context = createContext();

  function Provider({ children }) {
    const [items, setItems] = useState(() => {
      try {
        const stored = localStorage.getItem(storageKey);
        const parsed = JSON.parse(stored);
        return Array.isArray(parsed) ? parsed : [];
      } catch {
        return [];
      }
    });

    useEffect(() => {
      localStorage.setItem(storageKey, JSON.stringify(items));
    }, [items]);

    return (
      <Context.Provider value={{ items, setItems }}>
        {children}
      </Context.Provider>
    );
  }

  function useLocalStorageItems() {
    const context = useContext(Context);
    if (!context) {
      throw new Error(
        `useLocalStorageItems must be used within a ${storageKey} Provider`
      );
    }
    return context;
  }

  return [Provider, useLocalStorageItems];
}
