import FoodCard from '../../components/Other/FoodCard';
import { useCookLater } from '../../context/CookLaterContext';

function CookLater() {
  const { items, setItems } = useCookLater();

  if (!items || items.length === 0)
    return <p>You have no items to cook later</p>;

  return (
    <>
      <h3 className='fav-page-header'>Cook Later: </h3>
      <div className='food-card-container'>
        {items.map((item) => {
          const { id, name, image } = item;

          return (
            <FoodCard
              name={name}
              image={image}
              id={id}
              key={id}
              setItems={setItems}
              storageKey={'cookLater'}
            />
          );
        })}
      </div>
    </>
  );
}

export default CookLater;
