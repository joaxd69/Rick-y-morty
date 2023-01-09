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

    const ChangesCardsperPage=(e)=>setcardsPerPage(e.target.value)
 
    return (

        
        <div>
            <h1>Home</h1>
            <Searchbar
            setPage={setCurrentPage}/>
            <div>
                <span>Cards per page:</span>
                <button onClick={ChangesCardsperPage} value={4}>4</button>
                <button onClick={ChangesCardsperPage} value={8}>8</button>
                 <button onClick={ChangesCardsperPage} value={16}>16</button>
            </div>
             
               
            <Paginate
             totalcards={Allcards.length}
             cardsperpage={cardsPerPage}
             handleChangePage={handleChangePage}
             currentpage={currentPage}/>
             
            <Cards
            cards={cardsInpage}/>

            <Paginate
             totalcards={Allcards.length}
             cardsperpage={cardsPerPage}
             handleChangePage={handleChangePage}
             currentpage={currentPage}/>
             
    
        </div>
    )
}