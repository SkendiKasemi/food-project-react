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

  const buttonConfigs = [
    {
      key: 'youtube',
      Icon: YoutubeSVG,
      onClick: (meal) => window.open(meal.strYoutube, '_blank'),
    },
    {
      key: 'favorites',
      Icon: FavoritesSVG,
      onClick: (meal) => addItem(meal, fav, setFav, 'favorites'),
    },
    {
      key: 'cookLater',
      Icon: CookLaterSVG,
      onClick: (meal) => addItem(meal, cookLater, setCookLater, 'cookLater'),
    },
    {
      key: 'cookedMeals',
      Icon: CookedItSVG,
      onClick: (meal) =>
        addItem(meal, cookedMeals, setCookedMeals, 'cookedMeals'),
    },
  ];

  return (
    <div className='sdp-buttons'>
        {buttonConfigs.map(({ onClick, Icon, key }) => (
          <button
            key={key}
            className='sdp-button'
            onClick={() => onClick(meal)}
          >
            <Icon sdp={true} />
          </button>
        ))}
    </div>
  );
}

export default Buttons;
