import { Link } from 'react-router-dom';

function SearchItem({ item, index }) {
  const {
    idMeal: id,
    strMeal,
    strMealThumb: image,
    strArea: area,
    strCategory: category,
  } = item;

  const tags = [category, area];
  const name = strMeal?.length > 28 ? strMeal.slice(0, 28) + '…' : strMeal;

  return (
    <Link
      to={`/single-dish/${id}`}
      className='link single-dish-search'
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <img src={image} alt={name} className='search-image' />
      <div className='search-details'>
        <span className='search-name'>{name}</span>
        {tags[0]?.length > 1 && (
          <div className='search-tags'>
            {tags.map((el, i) => (
              <span key={i} className='search-tag'>
                {el}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}

export default SearchItem;
