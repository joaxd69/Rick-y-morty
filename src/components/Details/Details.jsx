import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { cleanState, getfavourites, getinfobyid } from "../../redux/Actions/Actions"


export default function Details (){
    const currentCard_id= useLocation().pathname.slice(9)

    const dispatch=useDispatch()

    useEffect(()=>{
      dispatch(getinfobyid(currentCard_id))
      return ()=>{///lo que este dentro de es bloque de codigo se ejcutara despues que se desmonte el componente
       dispatch(cleanState('CurrentCard'))//en este caso limpiara el estado que contiene a la carta actual
      }        
    },[])
  
    const Card = useSelector(state=>state.CurrentCard)
    const handleFavourites=()=>dispatch(getfavourites(Card))

   return(
        <div> 
            <button >clean state</button>
            <h1>{Card&&Card.name}</h1>
            <h2>The character is {Card&&Card.status}</h2>
            <img src={Card&&Card.image} alt="image" />
            <h5>The character location is : {Card.location&&Card.location.name}</h5>
            <button onClick={handleFavourites}>add to my cards</button>
            
        </div>
    )
}