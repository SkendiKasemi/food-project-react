import { useDishOfTheDay } from '../../../../context/DishOfTheDayContext';

function DOTDimage() {
  const { strMealThumb } = useDishOfTheDay();
  return <img src={strMealThumb} className='dish-of-the-day-img' />;
}

export default DOTDimage;
