import { StateCreator } from "zustand"
import { getCategories, getRecipes } from "../services/RecipeService"
import { Categories, DrinksType, SearchFilter } from "../types"

export type RecipesSliceTypes = {
    categories: Categories,
    drinks:DrinksType,
    fetechCategories: () => Promise<void>,
    SearchRecipes: (searchFilter: SearchFilter) => Promise<void>
   
}


export const createRecipeSlice: StateCreator<RecipesSliceTypes> = (set) => ({
    categories:{
        drinks:[]
    },
    drinks:{
        drinks:[]
    },
    fetechCategories: async () => {
       const categories = await getCategories();
       set({
        categories
       })
    },

    SearchRecipes: async(search) =>{
     const drinks =  await getRecipes(search)
     set({drinks})
    }
})