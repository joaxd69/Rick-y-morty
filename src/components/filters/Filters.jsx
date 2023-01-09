import { useDispatch, useSelector } from "react-redux"
import { filterbystatus } from "../../redux/Actions/Actions";

export default function Filters({total,setCurrentPage}){
      const dispatch = useDispatch();

      const handleFilter=(e)=>{dispatch(filterbystatus(e.target.value));setCurrentPage(1)}
    return(
        <div>
            <span>Filter character by status :</span>
            <select onChange={handleFilter}>
                <option >All</option>
                <option>Alive</option>
                <option>Dead</option>
            </select>
            <span>Total characters {total}</span>
        </div>
    )
}