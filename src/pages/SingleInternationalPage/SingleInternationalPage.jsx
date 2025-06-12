import { useParams } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import { useEffect } from 'react';
import CategoryCard from '../../components/Other/CategoryCard';
import Reveal from '../../components/Other/Reveal';

function SingleInternationalPage() {
  const { name } = useParams();
  const { setSearchedText, data } = useSearch();

  useEffect(() => {
    setSearchedText(name);
  }, [setSearchedText, name]);

  console.log(data);

  return (
    <Reveal>
      <h3 className='stl-page-header'>
        {name.charAt(0).toUpperCase() + name.slice(1)} Food
      </h3>
      <div className='food-card-container'>
        {data?.map((el) => {
          const { idMeal, strMeal, strMealThumb } = el;
          
          return (
            <CategoryCard
              id={idMeal}
              name={strMeal}
              thumb={strMealThumb}
              key={idMeal}
              singleDish={true}
            />
          );
        })}
      </div>
    </Reveal>
  );
}

export default SingleInternationalPage;
