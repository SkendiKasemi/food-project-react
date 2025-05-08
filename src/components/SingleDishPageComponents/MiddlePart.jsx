import { useDishById } from '../../context/SingleDishByIdContext';
import Buttons from './Buttons';

function MiddlePart() {
  const { meal } = useDishById();
  const {
    strArea: area,
    strCategory: category,
    name,
    strMealThumb: image,
  } = meal;
  return (
    <div className='sdp-image-container'>
      <img src={image} alt={name} className='sdp-image' />

      <div className='sdp-name-container'>
        <h3 className='sdp-name'>{name}</h3>

        <p className='sdp-info'>
          <span>{category}</span> <span>{area}</span>
        </p>
      </div>
      <Buttons />
    </div>
  );
}

export default MiddlePart;
