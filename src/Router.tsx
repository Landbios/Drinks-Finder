import { BrowserRouter, Route, Routes } from "react-router-dom"

import { lazy, Suspense } from "react"
import IndexPage from "./Views/IndexPage"


const FavoritesPage = lazy(() => import("./Views/FavoritesPage"))
import Layout from "./layouts/Layout"

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
                <Route path="/" element={<IndexPage/>}/>
                <Route path="/favorites" element={<Suspense fallback='...Loading'><FavoritesPage/></Suspense>}/>
            </Route>
        </Routes>
    
    </BrowserRouter>
  )
}
