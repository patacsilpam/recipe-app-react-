import { useEffect, useState } from "react";
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from "react-loading-skeleton";
import { Link, Outlet } from "react-router-dom";
import NavBar from "./NavBar";
export default function Recipe(){
    const APP_KEY =  'ed7c1f438f1e6ee45363d8863aac483b'
    const APP_ID = 'd52f0aa6' 
    const [recipes,setRecipes] = useState([]);
    const [query,setQuery] = useState('chicken');
    const [searchRecipes,setSearchRecipes] = useState();
    const [isLoading,setLoading] = useState(true);
    useEffect(() => {
        fetchRecipes();
    },[query]);

    const fetchRecipes = async() => {
        try{
            const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
            const json = await response.json();
            setLoading(false);
            setRecipes(json.hits)
            console.log(json)
        }
        catch(error){
            console.log(error);
        }
    }
    const handleChange = (e) => {setSearchRecipes(e.target.value)}
    const btnSearch = () => {setQuery(searchRecipes)}
    return(
        <>
            <div className="flex justify-center items-center h-40 gap-3">
                <input type="text" placeholder="Enter Recipe" className="outline-none p-2 border-2 border-red-300/100" onChange={handleChange} />
                <button className="w-36 bg-red-300 text-white p-2 rounded-full" onClick={btnSearch}>Search</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 p-10">
                {isLoading ?  ''  : recipes.map((item,index) => (
                   <div  className="mt-5 p-2" key={index}>
                       <img className="h-[200px] w-screen object-cover rounded-2xl drop-shadow-md hover:scale-[1.1] duration-75" src={item.recipe.image} alt={item.recipe.image} />
                       <div className="mt-2 grid px-2">
                       <p className="py-4 w-30">{item.recipe.label}</p>
                        <Link to={`${item.recipe.url}`} >Ingredients</Link>
                       </div>
                   </div>
               ))}
              
            </div>
            <Outlet/>
        </>
    )

}

