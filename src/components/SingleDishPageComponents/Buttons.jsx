import {
  useCookedMeals,
  useCookLater,
  useFavorites,
} from '../../context/localStorageContexts';
import { useDishById } from '../../context/SingleDishByIdContext';
import { addItem } from '../../data/addItemToFavorites';
import CookedItSVG from '../svg/CookedItSVG';
import CookLaterSVG from '../svg/CookLaterSVG';
import { FavoritesSVG } from '../svg/NavHeaderSVG';
import YoutubeSVG from '../svg/YoutubeSVG';

function Buttons() {
  const { meal } = useDishById();
  const { items: fav, setItems: setFav } = useFavorites();
  const { items: cookLater, setItems: setCookLater } = useCookLater();
  const { items: cookedMeals, setItems: setCookedMeals } = useCookedMeals();

  return (
    <div className='sdp-buttons'>
      <button
        className='sdp-button'
        onClick={() => window.open(meal.strYoutube, '_blank')}
      >
        <YoutubeSVG />
      </button>

      <button
        onClick={() => addItem(meal, fav, setFav, 'favorites')}
        className='sdp-button'
      >
        <FavoritesSVG sdp={true} />
      </button>

      <button
        className='sdp-button'
        onClick={() => addItem(meal, cookLater, setCookLater, 'cookLater')}
      >
        <CookLaterSVG sdp={true} />
      </button>

      <button
        className='sdp-button'
        onClick={() =>
          addItem(meal, cookedMeals, setCookedMeals, 'cookedMeals')
        }
      >
        <CookedItSVG sdp={true} />
      </button>
    </div>
  );
}

export default Buttons;
