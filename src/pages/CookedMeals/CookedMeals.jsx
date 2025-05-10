import FoodCard from '../../components/Other/FoodCard';
import { useCookedMeals } from '../../context/CookedMealsContext';

function CookedMeals() {
  const { items, setItems } = useCookedMeals();

  if (!items || items.length === 0) return <p>You have no items yet...</p>;

  return (
    <>
      <h3 className='fav-page-header'>Cooked Meals:</h3>
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
              storageKey={'cookedMeals'}
            />
          );
        })}
      </div>
    </>
  );
}

export default CookedMeals;
