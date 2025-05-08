import { useDishById } from '../../context/SingleDishByIdContext';

function Description() {
  const { meal } = useDishById();
  return (
    <div className='sdp-description'>
      <p className='sdp-paragraph'>
        <span>Instructions :</span>
        <br />
        {meal.strInstructions}
      </p>
    </div>
  );
}

export default Description;
