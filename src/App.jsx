import Recipe from './components/Recipe.jsx'
import NavBar from "./components/NavBar.jsx";
import Ingredients from "./page/Ingredients.jsx"
import { Routes,Route, BrowserRouter } from 'react-router-dom';

export default function App(){
  return(
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route index element={<Recipe/>}/>
          <Route path="/ingredients" element={<Ingredients/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}