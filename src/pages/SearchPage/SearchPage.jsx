import { useParams } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import { useEffect } from 'react';
import Reveal from '../../components/Other/Reveal';
import CategoryCard from '../../components/Other/CategoryCard';

function SearchPage() {
  const { search } = useParams();
  const { setSearchedText, data } = useSearch();

  useEffect(() => {
    setSearchedText(search);
  }, [setSearchedText, search]);

  if(data.length === 0) return (
    <h2>
      No results were found for <span style={{ fontStyle: 'italic' }}>'{search}'</span>
    </h2>
  );

  if(data?.length > 0 ) 
    return (
    <Reveal>
      <h3 className='stl-page-header'>
        Results for <span style={{ fontStyle: 'italic' }}>'{search}'</span>
      </h3>
      <div className='food-card-container'>
        {data?.map((el) => {
          const { idMeal, strMeal, strMealThumb } = el;

          return (
            <CategoryCard
              singleDish={true}
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

export default SearchPage;
