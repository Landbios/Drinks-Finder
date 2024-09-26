import { Outlet } from "react-router-dom"
import Modal from "../components/Modal"
import Header from "../components/Header"

export default function Layout() {
  return (
    <>
    
        <Header/>

    

      <main className="container mx-auto py-16">
      <Outlet/>

      </main>
      <Modal/>

      
    </>
  )
}
