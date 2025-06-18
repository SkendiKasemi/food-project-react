import InternationalCuisine from '../../components/Main/InternationalCuisines/InternationalCuisine';
import { sidebarData } from '../../data/SidebarData';

function OtherDishesPage2() {
  return (
    <div className='international-cuisine' style={{ marginTop: 0 }}>
      <h2>Categories: </h2>
      {sidebarData?.map((el, i) => {
        const { Icon, description, category } = el;
        const hoverEff = true;
        return (
          <InternationalCuisine
            key={i}
            icon={Icon}
            description={description}
            type={category}
            hover={hoverEff}
          />
        );
      })}
    </div>
  );
}

export default OtherDishesPage2;
