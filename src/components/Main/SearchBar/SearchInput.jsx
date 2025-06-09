import { SearchSVG } from '../../svg/SearchSVG';
import SearchDisplay from './SearchDisplay';
import { useSearch } from '../../../context/SearchContext';
import './search.css';

function SearchInput() {
  const { searchedText, setSearchedText } = useSearch();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className='search-form'>
      <input
        type='text'
        value={searchedText}
        onChange={(e) => setSearchedText(e.target.value)}
        className={`search-input ${
          searchedText.length > 0 ? 'search-input-active' : ''
        }`}
        placeholder='Search a dish'
      />
      <button className='search-btn' type='submit'>
        <SearchSVG className='search-btn-svg' />
      </button>

      {searchedText.length > 3 && <SearchDisplay />}
    </form>
  );
}

export default SearchInput;
