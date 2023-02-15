

import { Link } from 'react-router-dom'
import style from '../LandinPage/LandingPage.module.css'
export default function Landinpage(){
    
       return(
     <div>
        <h1>Welcome to Rick y morty App</h1>

        <Link to='/home'>
          <button className={style.buttons}>go to home</button>
        </Link>
        <div className={style.container}>
        
        </div>
    </div>   
    )
    
}