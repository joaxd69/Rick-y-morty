import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { cleanState, deletefavourites } from "../../redux/Actions/Actions"

export default function Mycards(){
     const dispatch=useDispatch()
     const mycards=useSelector(state=>state.Favourites)

     const handleResetsCards= ()=> dispatch(cleanState('Favourites'))
     const handleDeleteCards=(e)=>dispatch(deletefavourites(e.target.name))
    
    return(
        <div>
            <span>You have {mycards.length} cards</span>
            <h1>My cards</h1>
            {mycards.length?mycards.map(i=>
               <div>
                <button name={i.name} onClick={handleDeleteCards}>X</button>
                <h4>{i.name}</h4>
                <img src={i.image} alt="image" width={150} height={150} />
               </div>): <div><h4>You don't have cards. Go to <Link  to='/home'>home</Link> and select cards.</h4></div>}
            <button onClick={handleResetsCards}>Reset</button>
        </div>
    )
}