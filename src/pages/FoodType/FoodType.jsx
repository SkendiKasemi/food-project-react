import { useParams } from "react-router-dom"

function FoodType() {
  const {foodType} = useParams();
  return (
    <div className="main">
      <h1>Food Type</h1>
      <h2>{foodType}</h2>
    </div>
  )
}

export default FoodType
