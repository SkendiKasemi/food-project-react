import { Link } from 'react-router-dom';
import Reveal from './Reveal';

function CategoryCard({ id, name, thumb, singleDish = false }) {
  return (
    <Reveal>
      <Link
        className='food-card'
        to={singleDish ? `/single-dish/${id}` : `/other-dishes/${name}`}
      >
        <img src={thumb} className='food-card-image' />
        <span className='food-card-name'>{name}</span>
      </Link>
    </Reveal>
  );
}

export default CategoryCard;
