import { useDishOfTheDay } from '../../../../../context/DishOfTheDayContext';

function DOTDdescription() {
  const { strMeal, ingredients } = useDishOfTheDay();
  return (
    <div className='description'>
      <h3 className='title'> {strMeal} </h3>
      <div className='ingredients'>
        <h4>Ingredients</h4>
        <ul className='ingredients-list'>
          {ingredients.map((el) => {
            return (
              <li key={el} className='ingredients-item'>
                {el}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default DOTDdescription;
