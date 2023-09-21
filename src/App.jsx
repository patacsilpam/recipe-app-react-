import Recipe from './components/Recipe.jsx'
import NavBar from "./components/NavBar.jsx";
import Ingredients from "./page/Ingredients.jsx"
import { Routes,Route, BrowserRouter } from 'react-router-dom';

export default function App(){

  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Recipe/>}/>
            <Route path="/ingredients/:id" element={<Ingredients/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}