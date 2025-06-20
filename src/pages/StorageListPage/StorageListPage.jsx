import EmptyState from '../../components/Other/EmptyState';
import FoodCard from '../../components/Other/FoodCard';
import Reveal from '../../components/Other/Reveal';
import './storageListPage.css';

function StorageListPage({ title, useStorageHook, storageKey, SVG }) {
  const { items, setItems } = useStorageHook();

  if (!items || items.length === 0) {
    return (
      <Reveal>
        <EmptyState
          title={title}
          suggestion={`Try adding a few recipes to your ${title.toLowerCase()} first!`}
          SVG={SVG}
        />
      </Reveal>
    );
  }

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
