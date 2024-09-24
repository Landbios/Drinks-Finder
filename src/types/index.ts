import {z} from 'zod'
import { CategoriesApisResponseSchema, DrinkApiResponse, DrinksApiResponse, SearchSchema } from '../utils/Recipes-Schema'


export type Categories = z.infer<typeof CategoriesApisResponseSchema>

export type SearchFilter = z.infer<typeof SearchSchema>

export type DrinksType = z.infer<typeof DrinksApiResponse>

export type Drink = z.infer<typeof DrinkApiResponse>