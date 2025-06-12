import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Homepage from './pages/Homepage/Homepage';
import FoodType from './pages/FoodType/FoodType';
import OtherDishesPage from './pages/OtherDishesPage/OtherDishesPage';
import FavoritesPage from './pages/Favorites/FavoritesPage';
import SingleDishPage from './pages/SingleDishPage/SingleDishPage';
import CookedMeals from './pages/CookedMeals/CookedMeals';
import CookLater from './pages/CookLater/CookLater';
import Reveal from './components/Other/Reveal';
import SingleCategory from './pages/SingleCategory/SingleCategory';
import InternationalDishesPage from './pages/InternationalDishesPage/InternationalDishesPage';
import SingleInternationalPage from './pages/SingleInternationalPage/SingleInternationalPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='general-main-part'>
        <Routes>
          <Route index path='/' element={<Homepage />} />
          <Route path='/food-type/:foodType' element={<FoodType />} />
          <Route path='/favorites' element={<FavoritesPage />} />
          <Route path='/cooked-meals' element={<CookedMeals />} />
          <Route path='/cook-later' element={<CookLater />} />

          <Route
            path='/single-dish/:id'
            element={
              <Reveal>
                <SingleDishPage />
              </Reveal>
            }
          />

          <Route path='/other-dishes' element={<OtherDishesPage />} />
          <Route path='/other-dishes/:category' element={<SingleCategory />} />

          <Route
            path='/international-cuisines'
            element={<InternationalDishesPage />}
          />
          <Route
            path='/international-cuisines/:name'
            element={<SingleInternationalPage />}
          />
        </Routes>
      </div>
      <Sidebar />
    </BrowserRouter>
  );
}

export default App;
