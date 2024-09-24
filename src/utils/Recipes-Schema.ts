import {z} from 'zod'

export const CategoriesApisResponseSchema = z.object({
    drinks:z.array(z.object({
     
            strCategory:z.string()
        
    }))
})

export const SearchSchema = z.object({
    Ingredient: z.string(),
    Category:z.string()
})


export const DrinkApiResponse = z.object({
    idDrink:z.string(),
    strDrink:z.string(),
    strDrinkThumb:z.string()

})

export const DrinksApiResponse = z.object({
    drinks:z.array(DrinkApiResponse)
})