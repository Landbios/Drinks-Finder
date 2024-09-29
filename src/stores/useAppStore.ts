import { create } from "zustand";
import { createRecipeSlice, RecipesSliceTypes } from "./RecipeSlice";
import {devtools} from 'zustand/middleware'
import { CreateFavoritesSlice, FavoritesSliceTypes } from "./FavoritesSlice";
import { CreateNotificationSlice, NotificationSliceTypes } from "./NotificationSlice";

export const UseAppStore = create<RecipesSliceTypes & FavoritesSliceTypes & NotificationSliceTypes>()(devtools((...a) => ({
    ...createRecipeSlice(...a),
    ...CreateFavoritesSlice(...a),
    ...CreateNotificationSlice(...a)
})))