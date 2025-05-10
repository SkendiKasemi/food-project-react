import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Homepage from './pages/Homepage/Homepage';
import FoodType from './pages/FoodType/FoodType';
import DishesPage from './pages/DishesPage/DishesPage';
import FavoritesPage from './pages/Favorites/FavoritesPage';
import SingleDishPage from './pages/SingleDishPage/SingleDishPage';
import CookedMeals from './pages/CookedMeals/CookedMeals';
import CookLater from './pages/CookLater/CookLater';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='general-main-part'>
        <Routes>
          <Route index path='/' element={<Homepage />} />
          <Route path='/food-type/:foodType' element={<FoodType />} />
          <Route path='/dishes' element={<DishesPage />} />
          <Route path='/favorites' element={<FavoritesPage />} />
          <Route path='/cooked-meals' element={<CookedMeals />} />
          <Route path='/cook-later' element={<CookLater />} />
          <Route path='/single-dish/:id' element={<SingleDishPage />} />
        </Routes>
      </div>
      <Sidebar />
    </BrowserRouter>
  );
}

export default App;
