import { StateCreator } from "zustand";
import { FavoritesSliceTypes } from "./FavoritesSlice";


type Notification = {
    text:string
    error:boolean 
    show:boolean
}

export type NotificationSliceTypes = {
    notificacion:Notification
    ShowNotification: (payload: Pick<Notification, 'text' | 'error'>) => void,
    HiddeNotification: () => void
}

export const CreateNotificationSlice: StateCreator<NotificationSliceTypes & FavoritesSliceTypes, [], [], NotificationSliceTypes> = (set,get) => ({
    notificacion: {

        text:'',
        error:false,
        show:false
    },
    
    ShowNotification: (payload) => {
        set({
            notificacion:{
                text:payload.text,
                error:payload.error,
                show:true
            }
        })
        setTimeout(() => {
            get().HiddeNotification()
        }, 5000)
    },
    HiddeNotification: () => {
        set({
            notificacion:{
                text:'',
                show:false,
                error:false
            }
        })
    }
})