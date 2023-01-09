import  { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
export default  function Cards({cards}){
     const dispatch=useDispatch()
     
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
        </div>
    )
} 