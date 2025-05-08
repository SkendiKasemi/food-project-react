import { Link } from 'react-router-dom';

function FoodCard({ id, name, image, area, category }) {
  return (
    <Link className='food-card' to={`/single-dish/${id}`}>
      <img src={image} className='food-card-image'/>
      <span className='food-card-name'>{name}</span>
    </Link>
  );
}

export default FoodCard;
