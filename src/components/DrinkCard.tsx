import { Drink } from "../types"
import { UseAppStore } from "../stores/useAppStore"

type drinkCardProps = {
    drink:Drink
}
const DrinkCard = ({drink}: drinkCardProps) => {

   const SelectRecipe = UseAppStore((state) => state.SelectRecipe)
  return (
    <div className="border  shadow-lg bg-white p-4 md:hover:scale-110 2xl:hover:scale-125 hover:transition-transform hover:rotate-2 rounded-md">
        <div>
            <img className="rounded-md w-full  h-72" src={drink.strDrinkThumb} alt={drink.strDrink} />
        </div>

        <div className="">
            <h2 className="text-2xl truncate font-black">{drink.strDrink}</h2>
            <button type="button" onClick={() => SelectRecipe(drink.idDrink)} className="bg-orange-800 rounded-md hover:bg-orange-950 mt-5 w-full p-3 font-bold text-white text-lg ">See Recipe</button>
        </div>
    </div>
  )
}

export default DrinkCard