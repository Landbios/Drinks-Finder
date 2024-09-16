import { BrowserRouter, Route, Routes } from "react-router-dom"
import IndexPage from "./Views/IndexPage"
import FavoritesPage from "./Views/FavoritesPage"
import Layout from "./layouts/Layout"

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
                <Route path="/" element={<IndexPage/>}/>
                <Route path="/favorites" element={<FavoritesPage/>}/>
            </Route>
        </Routes>
    
    </BrowserRouter>
  )
}
