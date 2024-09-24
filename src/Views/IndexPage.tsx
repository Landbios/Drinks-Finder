
import { useMemo } from "react"
import { UseAppStore } from "../stores/useAppStore"
import DrinkCard from "../components/DrinkCard"



const IndexPage = () => {

  const drinks = UseAppStore((state) => state.drinks)

  const hasDrinks = useMemo(() => drinks.drinks.length > 0,[drinks])
  return (
    <>
    <h1 className="text-6xl font-extrabold">Recipes</h1>
    {hasDrinks ? (<>
      {drinks.drinks.map((drink) => (<DrinkCard drink={drink} key={drink.idDrink}/>))}
    </>): (<>
    
    <p className="my-10 text-center text-2xl">There arent any drinks yet, please use the form to search a drink</p>
    
    </>)}
    </>
  )
}

export default IndexPage