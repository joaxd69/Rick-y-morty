import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getcharacters, getcharactersbyname } from "../../redux/Actions/Actions"

export default function Searchbar({setPage}){
    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(getcharacters())
    },[])
     const [name,setName]=useState('')
                             
     const handleChange=(e)=>e.target.value.length>1?setName(e.target.value):///la condicion es para cuando la searchbar este vacia 
                             dispatch(getcharactersbyname(''))&&setName('')/// devuela todos las cartas,y setee el estado name para evitar un pequenio bug 

     const handleSearch=()=>{dispatch(getcharactersbyname(name));setPage(1)}
    return(
    <div>
      <input type="search" onChange={handleChange} placeholder="Write a name" />
      <input type="button" value='search' onClick={handleSearch} />
    </div>
    )
}