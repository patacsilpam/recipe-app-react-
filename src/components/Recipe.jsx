import propTypes from "prop-types";

export default function Recipe({title,image,calories,ingredients}){
    return(
        <>
             <div>
            <h1>{title}</h1>

              
<p>Calories : {calories}</p>
  
            <img src={image} alt=""/>
  
        </div>
        </>
    )

}

Recipe.propTypes = {
    title: propTypes.string,
    image: propTypes.string,
    calories: propTypes.number,
    ingredients: propTypes.array
}

