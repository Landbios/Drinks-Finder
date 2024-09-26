import { StateCreator } from "zustand"
import { getCategories, getRecipeData, getRecipes } from "../services/RecipeService"
import { Categories, Drink, DrinksType, Recipe, SearchFilter } from "../types"

export type RecipesSliceTypes = {
    categories: Categories,
    drinks:DrinksType,
    selectedRecipe:Recipe,
    modal:boolean,
    fetechCategories: () => Promise<void>,
    SearchRecipes: (searchFilter: SearchFilter) => Promise<void>,
    SelectRecipe: (id:Drink['idDrink']) => Promise<void>
    CloseModal: () => void
   
}


export const createRecipeSlice: StateCreator<RecipesSliceTypes> = (set) => ({
    categories:{
        drinks:[]
    },
    drinks:{
        drinks:[]
    },
    selectedRecipe:{} as Recipe,
    modal:false,
    fetechCategories: async () => {
       const categories = await getCategories();
       set({
        categories
       })
    },

    SearchRecipes: async(search) =>{
     const drinks =  await getRecipes(search)
     set({drinks})
    },
    SelectRecipe: async(id) => {
       const selectedRecipe = await getRecipeData(id)
       set({selectedRecipe,modal:true})
       
    },
    CloseModal: () =>{
        
        set({
            modal:false, selectedRecipe:{} as Recipe
        })
    } 
})