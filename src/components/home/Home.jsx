import { useState } from "react";
import { useSelector } from "react-redux";
import Cards from '../cards/Cards'
import Paginate from "../Paginate/Paginate";
import Searchbar from "../Searchbar/Searchbar";

export default function Home(){

    const [currentPage,setCurrentPage]=useState(1)
    const [cardsPerPage,setcardsPerPage]= useState(4)
    const Allcards = useSelector(state=>state.Cards)
    const lastCardindex= currentPage * cardsPerPage;
    const firstCardindex= lastCardindex-cardsPerPage;
    const cardsInpage =Allcards&&Allcards.slice(firstCardindex,lastCardindex)
    
    const handleChangePage=(e)=>setCurrentPage(e.target.value)
 
    return (

        
        <div>
            <h1>Home</h1>
            <Searchbar
            setPage={setCurrentPage}/>
            <Paginate
             totalcards={Allcards.length}
             cardsperpage={cardsPerPage}
             handleChangePage={handleChangePage}
             currentpage={currentPage}/>
             
            <Cards
            cards={cardsInpage}/>
    
        </div>
    )
}