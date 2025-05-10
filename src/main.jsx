import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './App.jsx';
import { DishOfTheDayProvider } from './context/DishOfTheDayContext.jsx';
import { OtherDishesProvider } from './context/OtherDishesContext.jsx';
import { SingleDishByIdProvider } from './context/SingleDishByIdContext.jsx';

import {
  FavoritesProvider,
  CookLaterProvider,
  CookedMealsProvider,
} from './context/localStorageContexts.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DishOfTheDayProvider>
      <SingleDishByIdProvider>
        <OtherDishesProvider>
          <CookLaterProvider>
            <CookedMealsProvider>
              <FavoritesProvider>
                <App />
              </FavoritesProvider>
            </CookedMealsProvider>
          </CookLaterProvider>
        </OtherDishesProvider>
      </SingleDishByIdProvider>
    </DishOfTheDayProvider>
  </StrictMode>
);
