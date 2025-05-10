import FoodCard from "../../components/Other/FoodCard";
import './storageListPage.css';

function StorageListPage({ title, useStorageHook, storageKey }) {
  const { items, setItems } = useStorageHook();

  if (!items || items.length === 0)
    return <p>You have no items in the {title.toLowerCase()}</p>

  return (
    <>
      <h3 className='stl-page-header'>{title}</h3>
      <div className='food-card-container'>
        {items.map(({ id, name, image }) => (
          <FoodCard
            key={id}
            id={id}
            name={name}
            image={image}
            setItems={setItems}
            storageKey={storageKey}
          />
        ))}
      </div>
    </>
  );
}

export default StorageListPage;
