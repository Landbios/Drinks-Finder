import { Drink } from "../types"

type drinkCardProps = {
    drink:Drink
}
const DrinkCard = ({drink}: drinkCardProps) => {
  return (
    <div>{drink.strDrink}</div>
  )
}

export default DrinkCard