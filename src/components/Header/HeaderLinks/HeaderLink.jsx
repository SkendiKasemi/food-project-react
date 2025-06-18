import { NavLink } from 'react-router-dom';
import { useDishOfTheDay } from '../../../context/DishOfTheDayContext';

function HeaderLink({ href, icon, text }) {
  const { idMeal } = useDishOfTheDay();

  if (href != '') {
    return (
      <NavLink to={href} className='link header-link'>
        {icon}
        {text}
      </NavLink>
    );
  } else {
    return (
      <NavLink to={`/single-dish/${idMeal}`} className='link header-link'>
        {icon}
        {text}
      </NavLink>
    );
  }
}

export default HeaderLink;
