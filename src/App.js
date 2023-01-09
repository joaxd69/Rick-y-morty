import './App.css';
import  {BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/home/Home'
import Landinpage from './components/LandinPage/LandingPage';
import Errorpage from './components/Error/Errorpage';
import Nav from './components/Nav/Nav';
import Details from './components/Details/Details';
import Mycards from './components/My cards/MyCards';

function App() {
  const dirs =['/home','/','/details:id','/mycards']////logica que combina mas abajo para indicar errores 404
  const array = dirs.filter(i=>i.includes(window.location.pathname.slice(0,8)))//slice xq daba problemas en la ruta details:(numero)
  return (


  <BrowserRouter>
<div className="App">
<Route path='/' render={()=>window.location.pathname!=='/'?<Nav/>:null}/>
<Route exact path='/'component={Landinpage}/>
<Route exact path='/home' component={Home}/>
<Route exact path='/details:id' component={Details}/>
<Route exact path='/mycards' component={Mycards}/>
<Route  render={()=>!array.length?<Errorpage/>:null}/> {/*  improvise esta logica xq no pude lograr implementar una ruta 404(posible version de react)*/}
</div>
  </BrowserRouter>

   
  );
}

export default App;
