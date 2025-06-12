import { Link } from 'react-router-dom';
import { internationalData } from '../../../data/internationalData';
import InternationalCuisine from './InternationalCuisine';

function InternationalCuisines() {
  return (
    <div className='international-cuisine' id='international'>
      <h2 className='international-header'>
        <Link to='/international-cuisines'>Best International Cuisines</Link>
      </h2>
      {internationalData.map((el, i) => {
        const { Icon, description, type } = el;
        return (
          <InternationalCuisine
            key={i}
            icon={Icon}
            description={description}
            type={type}
          />
        );
      })}
    </div>
  );
}

export default InternationalCuisines;
