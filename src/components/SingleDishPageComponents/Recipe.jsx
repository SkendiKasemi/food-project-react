import { useDishById } from '../../context/SingleDishByIdContext';
import RecipeCard from '../Other/RecipeCard';

function Recipe() {
  const { meal } = useDishById();
  return (
    <div className='sdp-recipe'>
      <RecipeCard
        items={meal.ingredients}
        liClassname={'recipe-ingredient'}
        ulClassName={'recipe-list'}
      />
    </div>
  );
}

export default Recipe;
