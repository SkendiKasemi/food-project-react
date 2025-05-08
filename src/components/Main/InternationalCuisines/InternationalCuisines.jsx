import { internationalData } from '../../../data/internationalData';
import InternationalCuisine from './InternationalCuisine';

function InternationalCuisines() {
  return (
    <div className='international-cuisine' id='international'>
      <h2>Best International Cuisines</h2>
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
