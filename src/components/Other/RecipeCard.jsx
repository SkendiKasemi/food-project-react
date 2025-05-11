import Loading from './Loading';
function RecipeCard({ ulClassName, liClassname, items = [] }) {
  if (!items) return <Loading />;
  return (
    <ul className={ulClassName}>
      <span>Recipe: </span>
      {items.map((ingr, i) => (
        <li key={i} className={liClassname}>
          {ingr}
        </li>
      ))}
    </ul>
  );
}

export default RecipeCard;
