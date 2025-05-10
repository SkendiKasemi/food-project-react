import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './App.jsx';
import { DishOfTheDayProvider } from './context/DishOfTheDayContext.jsx';
import { OtherDishesProvider } from './context/OtherDishesContext.jsx';
import { SingleDishByIdProvider } from './context/SingleDishByIdContext.jsx';
import { FavoritesProvider } from './context/FavoritesContext.jsx';
import { CookLaterProvider } from './context/CookLaterContext.jsx';
import { CookedMealsProvider } from './context/CookedMealsContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DishOfTheDayProvider>
      <SingleDishByIdProvider>
        <OtherDishesProvider>
          <FavoritesProvider>
            <CookLaterProvider>
              <CookedMealsProvider>
                <App />
              </CookedMealsProvider>
            </CookLaterProvider>
          </FavoritesProvider>
        </OtherDishesProvider>
      </SingleDishByIdProvider>
    </DishOfTheDayProvider>
  </StrictMode>
);
