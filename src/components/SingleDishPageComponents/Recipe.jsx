import { useDishById } from '../../context/SingleDishByIdContext';

function Recipe() {
  const { meal } = useDishById();
  return (
    <div className='sdp-recipe'>
      <ul className='recipe-list'>
        <span>Recipe: </span>
        {meal.ingredients.map((ingr, i) => (
          <li key={i} className='recipe-ingredient'>
            {ingr}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Recipe;
