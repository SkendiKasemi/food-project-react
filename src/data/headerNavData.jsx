import HeaderSearchInput from '../components/Main/SearchBar/SearchInput';
import {
  TodayDishSVG,
  FavoritesSVG,
  InternationalSVG,
  KitchenTipsSVG,
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
    href: '/kitchen-tips',
    Icon: <KitchenTipsSVG />,
    text: 'Kitchen Tips',
  },
  {
    href: '/international',
    Icon: <InternationalSVG />,
    text: 'International',
  },
  {
    href: '/favorites',
    Icon: <FavoritesSVG />,
    text: 'Favorites',
  },
];
