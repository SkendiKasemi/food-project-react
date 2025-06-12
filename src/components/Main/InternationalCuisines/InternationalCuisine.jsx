import { Link } from 'react-router-dom';
import Reveal from '../../Other/Reveal';

function InternationalCuisine({ icon, type, description, hover = false }) {
  if (!hover)
    return (
      <div className='cuisine'>
        {icon}
        <h3>{type}</h3>
        <p>{description}</p>
      </div>
    );

  if (hover)
    return (
      <Reveal>
        <Link
          to={`/international-cuisines/${type.toLowerCase()}`}
          className='link cuisine cousine-link'
        >
          {icon}
          <h3>{type}</h3>
          <p>{description}</p>
        </Link>
      </Reveal>
    );
}

export default InternationalCuisine;
