import { useDishOfTheDay } from '../../../../../context/DishOfTheDayContext';
import RecipeCard from '../../../../Other/RecipeCard';

function DOTDdescription() {
  const { strMeal, ingredients } = useDishOfTheDay();

  return (
    <div className='description'>
      <h3 className='title'> {strMeal} </h3>
      <div className='ingredients'>
        <h4>Ingredients</h4>
        <RecipeCard
          items={ingredients}
          liClassname={'ingredients-item'}
          ulClassName={'ingredients-list'}
        />
      </div>
    </div>
  );
}

export default DOTDdescription;
