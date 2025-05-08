function KitchenTip({name, description, id, bullets}) {
  return (
    <div className="tip">
      <h3>{id}. {name}</h3>
      <p>{description}</p>
      <ul>
        {bullets.map((el, i) => (
          <li key={i}>{el}</li>
        ) )}
      </ul>
    </div>
  )
}

export default KitchenTip
