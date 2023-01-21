import { useState } from "react";
import { useSelector } from "react-redux";

export default function Paginate({cardsperpage,totalcards,handleChangePage,currentpage}){
      let array = []
      for (var i =1;i<Math.floor(totalcards/cardsperpage);i++){
            array.push(i)
      }
    
      return(
        <div>
               <h6>Hi my friend you are in page: {currentpage} now</h6>
              {array.map((i,key)=>
                <button key={key} onClick={handleChangePage} value={i} >{i}</button>
                )}
        </div>
      )
}