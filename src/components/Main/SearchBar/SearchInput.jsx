import { useState } from 'react';
import { SearchSVG } from '../../svg/SearchSVG';

function SearchInput() {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    // <div className='search-holder'>
      <form onSubmit={(e) => handleSubmit(e)} className='search-form'>
        <input
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
          className='search-input'
          placeholder='Search a dish'
        />
        <button className='search-btn'>
          <SearchSVG />
        </button>
      </form>
    // </div>
  );
}

export default SearchInput;
