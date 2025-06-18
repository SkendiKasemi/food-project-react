import DOTDdescription from './DOTD/DOTDdesc/DOTDdescription';
import DOTDimage from './DOTD/DOTDimage';

function DishOfTheDay() {


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
