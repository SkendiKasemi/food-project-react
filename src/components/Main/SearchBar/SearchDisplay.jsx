import { useSearch } from '../../../context/SearchContext';
import SearchItem from './SearchItem';

function SearchDisplay() {
  const { data } = useSearch();

  if (data?.length === 0) {
    return (
      <div className='search-result-display empty'>
        <span>No dish was found!</span>
      </div>
    );
  }

  return (
    <div className='search-result-display'>
      {data?.map((item, i) => (
        <SearchItem item={item} key={item.idMeal || i} index={i} />
      ))}
    </div>
  );
}

export default SearchDisplay;
