import propTypes from "prop-types";
import { useState } from "react";

export default function Recipe({label,image,calories,ingredients,totalTime}){
    let prepTime = 0;
    if(totalTime > 60){
       prepTime = totalTime/60;
       prepTime = prepTime.toFixed(2) + " hr"
    }
    else{
        prepTime = totalTime + " min";
    }
    return(
        <>
            <div className="mt-10" >
                
                <img src={image} alt={label} className="rounded object-cover h-56 w-96"/> 
                <div className="flex flex-direction justify-between">
                    <h1>{label}</h1>
                    <small className="text-slate-600">{prepTime}</small>
                </div>
                <small className="text-slate-600">{ingredients.length} ingredients</small> 
            </div>
        </>
    )

}

Recipe.propTypes = {
    label: propTypes.string,
    image: propTypes.string,
    calories: propTypes.number,
    ingredients: propTypes.array,
    totalTime: propTypes.number
}

