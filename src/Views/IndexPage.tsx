
import { useMemo } from "react"
import { UseAppStore } from "../stores/useAppStore"
import DrinkCard from "../components/DrinkCard"



const IndexPage = () => {

  const drinks = UseAppStore((state) => state.drinks)

  const hasDrinks = useMemo(() => drinks.drinks.length > 0,[drinks])
  return (
    <>
    <h1 className="text-6xl font-extrabold">Recipes</h1>
    {hasDrinks ? (<div className="grid mx-5 grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
      {drinks.drinks.map((drink) => (<DrinkCard drink={drink} key={drink.idDrink}/>))}
    </div>): (<>
    
    <p className="my-10 text-center text-2xl">There arent any drinks yet, please use the form to search a drink</p>
    
    </>)}
    </>
  )
}

export default IndexPage