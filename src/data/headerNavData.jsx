import CookedItSVG from '../components/svg/CookedItSVG';
import CookLaterSVG from '../components/svg/CookLaterSVG';
import {
  TodayDishSVG,
  FavoritesSVG,
  OtherDishesSVG,
} from '../components/svg/NavHeaderSVG';

export const headerNavData = [
  {
    href: '',
    Icon: <TodayDishSVG />,
    text: "Today's Dish",
  },
  {
    href: '/other-dishes',
    Icon: <OtherDishesSVG />,
    text: 'Other Dishes',
  },
  {
    href: '/favorites',
    Icon: <FavoritesSVG />,
    text: 'Favorites',
  },
  {
    href: '/cook-later',
    Icon: <CookLaterSVG />,
    text: 'Cook Later',
  },
  {
    href: '/cooked-meals',
    Icon: <CookedItSVG />,
    text: 'Cooked Meals',
  },
];
