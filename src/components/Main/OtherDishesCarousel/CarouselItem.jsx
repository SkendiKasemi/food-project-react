import { Link } from 'react-router-dom';

function CarouselItem({ image, description, name, id }) {
  return (
    <article className='card-article'>
      <div className='card-image'>
        <img src={image} alt={name} className='card-img' />
      </div>

      <div className='card-data'>
        <h3 className='card-name'>
          {name.length > 14 ? `${name.slice(0, 14)}...` : name}
        </h3>
        <p className='card-description'>{description}</p>

        <Link to={`/single-dish/${id}`} className='card-button'>
          Have a look!
        </Link>
      </div>
    </article>
  );
}

export default CarouselItem;
