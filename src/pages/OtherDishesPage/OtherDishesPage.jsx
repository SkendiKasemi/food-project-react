import CategoryCard from '../../components/Other/CategoryCard';
import Reveal from '../../components/Other/Reveal';
import { useOtherDishesPage } from '../../context/OtherDishesPageContext';

function OtherDishesPage() {
  const { categories } = useOtherDishesPage();
  return (
    <Reveal>
      <h3 className='stl-page-header'>Categories: </h3>
      <div className='food-card-container'>
        {categories?.map((el) => {
          const {
            idCategory,
            strCategory,
            strCategoryThumb,
            strCategoryDescription,
          } = el;

          return (
            <CategoryCard
              desc={strCategoryDescription}
              id={idCategory}
              name={strCategory}
              thumb={strCategoryThumb}
            />
          );
        })}
      </div>
    </Reveal>
  );
}

export default OtherDishesPage;
