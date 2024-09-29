import DrinkCard from "../components/DrinkCard"
import { UseAppStore } from "../stores/useAppStore"
import { useMemo } from "react"
const FavoritesPage = () => {
  const favorites = UseAppStore((state) => state.favorites) 
  
  const hasFavorites = useMemo(() => favorites.length,[favorites])
  return (
    <>
    <h1 className="text-6xl font-extrabold">Favorites</h1>

    {hasFavorites ?
    <div className="grid mx-5 grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">

      {favorites.map(recipe => (<DrinkCard drink={recipe} key={recipe.idDrink}/>))}
    </div> : <p className="my-10 text-center text-2xl">Favorites should appear here</p>}
    </>
  )
}

export default FavoritesPage