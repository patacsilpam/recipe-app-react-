import { useState,useEffect } from "react";
import Recipe from './components/Recipe.jsx'
export default function App(){
  const APP_KEY =  'ed7c1f438f1e6ee45363d8863aac483b'
  const APP_ID = 'd52f0aa6'
  const [recipes,setRecipe] = useState([]);
  const [search,setSearch] = useState("");
  const [query,setQuery] = useState('chicken');
  //const [dataLength,setLength] = useState(0);
  //const query = 'chicken'
  useEffect(()=>{
    fetchRecipes();
  },[query]);
  //get recipes
  const fetchRecipes = async() => {
    try{
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      const jsonData = await response.json();
      setRecipe(jsonData.hits);
      //setLength(jsonData.length);
      console.log(jsonData)
    }
    catch(error){
      console.error('Error fetching data',error)
    }
    
  }
  const updateSearch = e => {
    setSearch(e.target.value)
  }
  const submitForm = e =>{
    e.preventDefault();
    setQuery(search)
    setSearch("")
    //console.log(dataLength)
  }
 
  return(
    <>
      <div className="p-3 grid place-items-center">
        <form onSubmit={submitForm} className="flex flex-row ">
          <input type="text" 
            value={search} 
            onChange={updateSearch} 
            className="border-2 border-slate-400 mx-3 w-80"
            placeholder="Enter recipe name"/>
          <button 
            type="submit" 
            className="rounded-full bg-blue-500 text-white p-2 w-32">
            Search
          </button>
        </form>
        <div className="grid grid-rows-5 grid-flow-col gap-8">
        {recipes.map((recipe,index) => (
           
           <Recipe
           className=""
           key={index}
           title={recipe.recipe.title}
           label={recipe.recipe.label}
           calories={recipe.recipe.calories}
           image={recipe.recipe.image}
           ingredients={recipe.recipe.ingredients}
           totalTime={recipe.recipe.totalTime}
         />
        ))}
        </div>
      </div>
    </>
  )
}

