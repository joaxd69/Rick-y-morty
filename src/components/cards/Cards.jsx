import {Link} from 'react-router-dom'
export default  function Cards({cards}){
   
     return (
        <div>
            {cards&&cards.map((i,key)=>
            <div key={key}>
                <Link to={`/details:${i.id}`}>
               <h3>{i.name}</h3> 
               </Link>
                <img src={i.image} alt="img" /> <br/>
                 <span>Status:{i.status}</span>
            </div>
            )}
        </div>
    )
} 