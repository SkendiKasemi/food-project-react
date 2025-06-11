import { useParams } from 'react-router-dom';
import { useSingleCategory } from '../../context/SingleCategory';
import { useEffect } from 'react';
import CategoryCard from '../../components/Other/CategoryCard';
import Reveal from '../../components/Other/Reveal';

function SingleCategory() {
  const { category } = useParams();
  const { setCategory, data } = useSingleCategory();

  useEffect(() => {
    setCategory(category);
  }, [category, setCategory]);

  return (
    <Reveal>
      <h3 className='stl-page-header'>{category} : </h3>
      <div className='food-card-container'>
        {data?.map((el) => {
          const { idMeal, strMeal, strMealThumb } = el;

          return (
            <CategoryCard
              key={idMeal}
              id={idMeal}
              name={strMeal}
              thumb={strMealThumb}
            />
          );
        })}
      </div>
    </Reveal>
  );
}

export default SingleCategory;
