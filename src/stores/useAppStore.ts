import { create } from "zustand";
import { createRecipeSlice, RecipesSliceTypes } from "./RecipeSlice";
import {devtools} from 'zustand/middleware'

export const UseAppStore = create<RecipesSliceTypes>()(devtools((...a) => ({
    ...createRecipeSlice(...a)
})))