import { useFavorites } from '../../context/FavoritesContext';
import { useDishById } from '../../context/SingleDishByIdContext';
import { addItem } from '../../data/addItemToFavorites';
import CookedItSVG from '../svg/CookedItSVG';
import CookLaterSVG from '../svg/CookLaterSVG';
import { FavoritesSVG } from '../svg/NavHeaderSVG';
import YoutubeSVG from '../svg/YoutubeSVG';

function Buttons() {
  const { meal } = useDishById();
  const { items, setItems } = useFavorites();

  return (
    <div className='sdp-buttons'>

      <button className='sdp-button' onClick={() => window.open(meal.strYoutube, '_blank')}>
        <YoutubeSVG />
      </button>


      <button
        onClick={() => addItem(meal, items, setItems)}
        className='sdp-button'
      >
        <FavoritesSVG sdp={true} />
      </button>
      <button className='sdp-button'>
        <CookLaterSVG />
      </button>
      <button className='sdp-button'>
        <CookedItSVG />
      </button>
    </div>
  );
}

export default Buttons;
