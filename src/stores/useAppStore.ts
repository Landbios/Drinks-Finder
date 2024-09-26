import { create } from "zustand";
import { createRecipeSlice, RecipesSliceTypes } from "./RecipeSlice";
import {devtools} from 'zustand/middleware'
import { CreateFavoritesSlice, FavoritesSliceTypes } from "./FavoritesSlice";

export const UseAppStore = create<RecipesSliceTypes & FavoritesSliceTypes>()(devtools((...a) => ({
    ...createRecipeSlice(...a),
    ...CreateFavoritesSlice(...a)
})))