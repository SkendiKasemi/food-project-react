import { SearchSVG } from '../../svg/SearchSVG';
import SearchDisplay from './SearchDisplay';
import { useSearch } from '../../../context/SearchContext';
import './search.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function SearchInput() {
  const {
    searchedText,
    setSearchedText,
    mounted,
    isActive,
    setIsActive,
    registerWrapper,
    location,
  } = useSearch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchedText.trim().length === 0) return;

    navigate(`/search/${encodeURIComponent(searchedText.trim())}`);

    setSearchedText('');
    setIsActive(false);
  };

  useEffect(() => {
    // if (!location.pathname.startsWith('/search/')) {
      setSearchedText('');
    // }
    setIsActive(false);
  }, [location.pathname, setSearchedText, setIsActive]);

  return (
    <div className='center' ref={registerWrapper}>
      <form
        onSubmit={handleSubmit}
        className={`search-form ${mounted ? 'search-form--visible' : ''}`}
      >
        <input
          type='text'
          value={searchedText}
          onChange={(e) => {
            setSearchedText(e.target.value);
            if (e.target.value.length > 0) setIsActive(true);
          }}
          onFocus={() => setIsActive(true)}
          className={`search-input ${
            searchedText.length > 0 ? 'search-input-active' : ''
          }`}
          placeholder='Search a dish'
        />

        <button className='search-btn' type='submit'>
          <SearchSVG className='search-btn-svg' />
        </button>

        {isActive && searchedText.length >= 3 && <SearchDisplay />}
      </form>
    </div>
  );
}

export default SearchInput;
