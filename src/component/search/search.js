import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
// import css file
import './search.css'
function Search ()
{
    return(
       <>

           <div className="searchinput">
           <input type="text" placeholder="type something">
           </input>
           <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
           </div>

       </>
    )
}
export default Search;