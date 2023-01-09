import style from '../Nav/Nav.module.css'
import {Link} from 'react-router-dom'
export default function Nav(){
      const Pages=['/home','/','/details:id','/mycards']
     const currentLink=window.location.pathname
     const currentpage= Pages.filter(i=>i.includes(currentLink.slice(0,8))).length
                        ?currentLink.slice(1,8):'Rick y morty app'///dira la ruta actual 
    return(
        <div className={style.Navcontainer }>
          <h1>{currentpage}</h1>
          <div className={style.Buttoncontain}>
          <Link to='/'>
           <button>Exit</button>
          </Link>
          <Link to='/mycards'>
           <button>My cards</button>
          </Link>
          <button>About</button>
          </div>
          
        </div>
        
    )
}