import { useParams } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import { useEffect } from 'react';
import Reveal from '../../components/Other/Reveal';
import CategoryCard from '../../components/Other/CategoryCard';
import NoResults from '../../components/Other/NoResults'; // new!
import Loading from '../../components/Other/Loading';

function SearchPage() {
  const { search } = useParams();
  const { setSearchedText, data, isLoading } = useSearch();

  useEffect(() => {
    setSearchedText(search);
  }, [setSearchedText, search]);

  // 1) still loading: show nothing or a spinner
  if (data === null && isLoading) {
    return <Loading />;
  }

  // 2) done loading, but no results
  if (!isLoading && Array.isArray(data) && data.length === 0) {
    return <NoResults query={search} />;
  }

  // 3) we have results
  if (isLoading === false && data?.length > 0)
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
