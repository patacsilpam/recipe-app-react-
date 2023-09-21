import { useEffect } from "react";
import { useParams } from "react-router-dom";
export default function Ingredients(){
    const {id} = useParams();
    useEffect(()=>{
        document.title = `Foody | ${id}`;
    })
    return(
        <>
            <span>{id}sdf</span>

        </>
    )
}