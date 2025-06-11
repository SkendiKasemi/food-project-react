import { useDishOfTheDay } from '../../../context/DishOfTheDayContext';
import Loading from '../../Other/Loading';

import DOTDdescription from './DOTD/DOTDdesc/DOTDdescription';
import DOTDimage from './DOTD/DOTDimage';

function DishOfTheDay() {
  const { idMeal } = useDishOfTheDay();

  if (!idMeal) return <Loading />;

  return (
    <div className='center'>
      <div className='dish-of-the-day' id='dish-of-the-day'>
        <h2>Dish of the day</h2>
        <DOTDimage />
        <DOTDdescription />
      </div>
    </div>
  );
}

export default DishOfTheDay;
