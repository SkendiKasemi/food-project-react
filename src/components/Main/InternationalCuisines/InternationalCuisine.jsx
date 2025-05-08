function InternationalCuisine({ icon, type, description }) {
  return (
    <div className='cuisine'>
      {icon}
      <h3>{type}</h3>
      <p>{description}</p>
    </div>
  );
}

export default InternationalCuisine;
