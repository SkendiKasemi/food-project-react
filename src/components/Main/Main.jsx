import DishOfTheDay from './DishOfTheDay/DishOfTheDay';
import Entrance from './Entrance/Entrance';
import InternationalCuisines from './InternationalCuisines/InternationalCuisines';
import KitchenOrganizationTips from './KitchenOrganization/KitchenOrganizationTips';
import Carousel from './OtherDishesCarousel/Carousel';
import SearchInput from './SearchBar/SearchInput';

import './main.css';

function Main() {
  return (
    <main className='main'>
      <SearchInput />
      <Entrance />
      <DishOfTheDay />
      <Carousel />
      <KitchenOrganizationTips />
      <InternationalCuisines />
    </main>
  );
}

export default Main;
