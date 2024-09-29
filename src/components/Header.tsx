import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { UseAppStore } from "../stores/useAppStore"

const Header = () => {
  const { pathname } = useLocation()
  const [searchFilters, setSearchFilters] = useState({Ingredient:'',Category:''})
  const ishome = useMemo(() => pathname === '/', [pathname])

  const fetchCategorys = UseAppStore((state) => state.fetechCategories)
  const searchRecipes = UseAppStore((state) => state.SearchRecipes)
  const categories = UseAppStore((state) => state.categories)
  const ShowError = UseAppStore((state) => state.ShowNotification)
 


  useEffect(() => {

    fetchCategorys();
  }, [])

  
 const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {

  setSearchFilters({...searchFilters, [e.target.name]:e.target.value})

 }

const handleSubmit = (e:FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    if (Object.values(searchFilters).includes('')){
      ShowError({text:'Fill all the fields',error:true})
      return
    }

    searchRecipes(searchFilters)
}

  return (
    <header className={pathname === '/' ? 'bg-headerimg' :  'bg-slate-800'} >
      <div className='mx-auto container px-5 py-16'>
        <div className="flex justify-between items-center">
          <img className='w-32' src="/logo.svg" alt="logo"></img>
          <nav className="flex gap-4">

            <NavLink to="/" className={({ isActive }) => isActive ? 'text-orange-600 uppercase font-bold' : 'text-white uppercase font-bold'}>Home</NavLink>
            <NavLink to="/favorites" className={({ isActive }) => isActive ? 'text-orange-600 uppercase font-bold' : 'text-white uppercase font-bold'}>Favorites</NavLink>

          </nav>



        </div>
        {ishome && (
          <form onSubmit={handleSubmit} className="md:w-1/2 2xl:w-1/3 w-12/12 bg-orange-400 my-32 p-10 rounded-lg shadow-lg space-y-6" action="">

            <div className="space-y-4">
              <label className="block text-white uppercase font-extrabold text-lg" htmlFor="Ingredient">Name or ingredients</label>
              <input onChange={handleChange} value={searchFilters.Ingredient} id="Ingredient" type="text" name="Ingredient" className="p-3 bg-white w-full rounded-lg focus:outline-none" placeholder="name or ingredient. ej: Vodka, Coffee" />
            </div>
            <div className="space-y-4">
              <label className="block text-white uppercase font-extrabold text-lg" htmlFor="Category">Category</label>
              <select onChange={handleChange} value={searchFilters.Category} id="Category" name="Category" className="p-3 bg-white w-full rounded-lg focus:outline-none" >


                <option value="">---Select a category---</option>
                {categories.drinks.map((category,index) => (<option key={index} value={category.strCategory} id={category.strCategory}>{category.strCategory}</option>))}
              </select>
            </div>

            <input type="submit" value="Search Drinks" className="cursor-pointer bg-orange-800 hover:bg-orange-950 text-white rounded-lg font-extrabold p-3 w-full" />
          </form>
        )}
      </div>
    </header>
  )
}

export default Header