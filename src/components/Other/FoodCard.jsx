import { Link } from 'react-router-dom';
import DeleteSVG from '../svg/DeleteSVG';
import { deleteItemByIdFromLocalStorage } from '../../data/deleteItemFromFavorites';

function FoodCard({ id, name, image, storageKey, setItems }) {
  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    deleteItemByIdFromLocalStorage(`${storageKey}`, id, name, setItems);
    alert(storageKey);
  };
  return (
    <Link className='food-card' to={`/single-dish/${id}`}>
      <img src={image} className='food-card-image' />
      <span className='food-card-name'>{name}</span>
      <button className='delete-svg-holder' onClick={handleDelete}>
        <DeleteSVG />
      </button>
    </Link>
  );
}

export default FoodCard;
