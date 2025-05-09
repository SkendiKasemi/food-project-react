import { Link } from 'react-router-dom';
import DeleteSVG from '../svg/DeleteSVG';
import { deleteItemByIdFromLocalStorage } from '../../data/deleteItemFromFavorites';
import { useFavorites } from '../../context/FavoritesContext';

function FoodCard({ id, name, image }) {
  const { setItems } = useFavorites();

  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    deleteItemByIdFromLocalStorage('favorites', id, name, setItems);
    alert(`${name} has been removed from favorites.`);
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
