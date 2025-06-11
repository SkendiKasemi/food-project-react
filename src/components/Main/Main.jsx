import Reveal from '../Other/Reveal';
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
      <Reveal>
        <Entrance />
      </Reveal>
      <Reveal>
        <DishOfTheDay />
      </Reveal>
      <Reveal>
        <Carousel />
      </Reveal>
      <Reveal>
        <KitchenOrganizationTips />
      </Reveal>
      <Reveal>
        <InternationalCuisines />
      </Reveal>
    </main>
  );
}

export default Main;
