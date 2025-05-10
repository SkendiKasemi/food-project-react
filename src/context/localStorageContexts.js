import { createLocalStorageContext } from './createLocalStorageContext';

export const [CookLaterProvider, useCookLater] =
  createLocalStorageContext('cookLater');

export const [FavoritesProvider, useFavorites] =
  createLocalStorageContext('favorites');
  
export const [CookedMealsProvider, useCookedMeals] =
  createLocalStorageContext('cookedMeals');
