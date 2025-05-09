import FoodCard from '../../components/Other/FoodCard';
import { useFavorites } from '../../context/FavoritesContext';
import './favorites.css';

function FavoritesPage() {
  const { items } = useFavorites();

  if (!items || items.length === 0)
    return <p>You have no items of the favorites list</p>;


  return (
    <>
      <h3 className='fav-page-header'>Favorites: </h3>
      <div className='food-card-container'>
        {items.map((item) => {
          const { id, name, image } = item;

          return <FoodCard name={name} image={image} id={id} key={id} />;
        })}
      </div>
    </>
  );
}

export default FavoritesPage;
