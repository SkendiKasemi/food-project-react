import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Homepage from './pages/Homepage/Homepage';
import FoodType from './pages/FoodType/FoodType';
import DOTDPage from './pages/DishOfTheDay/DOTDPage';
import KitchenTipsPage from './pages/KitchenTips/KitchenTipsPage';
import DishesPage from './pages/DishesPage/DishesPage';
import InternationalPage from './pages/International/InternationalPage';
import FavoritesPage from './pages/Favorites/FavoritesPage';
import SingleDishPage from './pages/SingleDishPage/SingleDishPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='general-main-part'>
        <Routes>
          <Route index path='/' element={<Homepage />} />
          <Route path='/food-type/:foodType' element={<FoodType />} />
          <Route path='/dishes' element={<DishesPage />} />
          <Route path='/kitchen-tips' element={<KitchenTipsPage />} />
          <Route path='/international' element={<InternationalPage />} />
          <Route path='/favorites' element={<FavoritesPage />} />
          <Route path='/single-dish/:id' element={<SingleDishPage />} />
        </Routes>
      </div>
      <Sidebar />
    </BrowserRouter>
  );
}

export default App;
