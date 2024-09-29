import { Outlet } from "react-router-dom"
import Modal from "../components/Modal"
import Header from "../components/Header"
import { useEffect } from "react"

import { UseAppStore } from "../stores/useAppStore"
import Notification from "../components/Notification"
export default function Layout() {
  const loadFromStorage = UseAppStore((state) => state.loadFromLocalStorage)
  useEffect(() => {

    loadFromStorage();
  },[])
  return (
    <>
    
        <Header/>

    

      <main className="container mx-auto py-16">
      <Outlet/>

      </main>
      <Modal/>
      <Notification/>

      
    </>
  )
}
