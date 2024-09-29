import { StateCreator } from "zustand";
import { Recipe } from "../types";
import { CreateNotificationSlice, NotificationSliceTypes } from "./NotificationSlice";

export type FavoritesSliceTypes = {
    favorites:Recipe[]
    handleClickFavorite:(recipe:Recipe) => void,
    FavoriteExiste:(id:Recipe['idDrink']) => boolean,
    loadFromLocalStorage: () => void
}

export const CreateFavoritesSlice: StateCreator<FavoritesSliceTypes & NotificationSliceTypes, [], [], FavoritesSliceTypes> = (set,get,api) => ({
    favorites:[],
    handleClickFavorite: (recipe) => {
        if(get().FavoriteExiste(recipe.idDrink)){
            set((state) => ({

                favorites:state.favorites.filter((favorite => favorite.idDrink !== recipe.idDrink))
            }))
            CreateNotificationSlice(set,get,api).ShowNotification({text:'Deleted from favorites', error:false})
        }
        else{

            //otra forma, solo que con get en vez de state
            set({favorites:[...get().favorites,recipe]})
            localStorage.setItem('favorites',JSON.stringify(get().favorites))
            CreateNotificationSlice(set,get,api).ShowNotification({text:'Added to favorites', error:false})
        }
    },
    FavoriteExiste: (id) =>{

        
        return get().favorites.some(favorite => favorite.idDrink === id)

    },
    loadFromLocalStorage: () => {

        const storedFavorites = localStorage.getItem('favorites')
        if(storedFavorites) {
            set({
                favorites:JSON.parse(storedFavorites)
            })
        }
    }
})