import { Link } from 'react-router-dom';
import { useDishOfTheDay } from '../../../context/DishOfTheDayContext';

function HeaderLink({ href, icon, text }) {
  const { idMeal } = useDishOfTheDay();

  if (href != '') {
    return (
      <Link to={href} className='link header-link'>
        {icon}
        {text}
      </Link>
    );
  } else {
    return (
      <Link to={`/single-dish/${idMeal}`} className='link header-link'>
        {icon}
        {text}
      </Link>
    );
  }
}

export default HeaderLink;
