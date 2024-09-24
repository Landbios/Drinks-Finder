import axios from "axios"

import { CategoriesApisResponseSchema, DrinksApiResponse } from "../utils/Recipes-Schema"
import { SearchFilter } from "../types"


export async function getCategories () {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
    const {data} = await axios(url)
    console.log(data)
   const result = CategoriesApisResponseSchema.safeParse(data)
   if(result.success){
    return result.data
   }
}

export async function getRecipes (filters:SearchFilter) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.Category}&i=${filters.Ingredient}`
    const {data} = await axios(url);
    const result = DrinksApiResponse.safeParse(data)
    if(result.success){
        return result.data
    }
}