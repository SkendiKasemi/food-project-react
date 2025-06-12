import InternationalCuisine from '../../components/Main/InternationalCuisines/InternationalCuisine.jsx';
import { internationalCuisines } from '../../data/internationalCuisines.jsx';

function InternationalDishesPage() {
  return (
    <div className='international-cuisine' style={{ marginTop: 0 }}>
      <h2> International Cuisines</h2>
      {internationalCuisines.map((el, i) => {
        const { Icon, description, type } = el;
        const hoverEff = true;
        return (
          <InternationalCuisine
            key={i}
            icon={Icon}
            description={description}
            type={type}
            hover={hoverEff}
          />
        );
      })}
    </div>
  );
}

export default InternationalDishesPage;
