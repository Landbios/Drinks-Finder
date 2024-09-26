import { StateCreator } from "zustand";
import { Recipe } from "../types";

export type FavoritesSliceTypes = {
    favorites:Recipe[]
}

export const CreateFavoritesSlice: StateCreator<FavoritesSliceTypes> = () => ({
    favorites:[]
})