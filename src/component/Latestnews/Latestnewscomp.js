import './Latestnewscomp.css'
// import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays} from '@fortawesome/free-solid-svg-icons'
import {faChevronRight } from '@fortawesome/free-solid-svg-icons'
function Latestnewscomp (props)
{
    return  (
        <>
        <div className="blocknews">
            <div className="imageblock">
                <img src={props.headerimg} alt=""></img>
                <div className="nameanddate">
                    <img src={props.iconimg}alt=""></img>
                    <span>{props.name}</span>
                    <p><FontAwesomeIcon icon={faCalendarDays}></FontAwesomeIcon>  21 july 2023</p>
                </div>      
            <p>{props.blockpara}</p>
            <button className="More">Read More <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon> </button>
            </div>

                    </div>
             
        </>
    )
}
   
  
export default Latestnewscomp;
   