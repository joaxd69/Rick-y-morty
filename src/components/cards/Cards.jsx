import { useState } from "react"
import  {useSelector, useDispatch } from 'react-redux'
import { getcharacters } from "../../redux/Actions/Actions"
import {Link} from 'react-router-dom'
export default  function Cards({cards}){
     const dispatch=useDispatch()
     
     const HandleDispatch=()=>dispatch(getcharacters())
    
    return (
        <div>
            {cards&&cards.map((i,key)=>
            <div key={key}>
               <Link to={`/details:${i.id}`}>
               <h3>{i.name}</h3> 
               </Link>
                <img src={i.image} alt="img" />
            </div>
            )}

            <button onClick={HandleDispatch} >Dispatch</button>
            
        </div>
    )
} 