// import images
import squareimg from '../../images/Header/header icons/download (4).png'
import circleimg from '../../images/Header/header icons/download (2).png'
import emptycircle from '../../images/Header/header icons/pintagon.png'
// import css  
import './Fixed-Header.css';
// import icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouseUser} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
function FixedHeader (props)
{  
    return(
      <div className="Headerfxed text-center">
        <div className = "fixedheaderimg">
          <img src={squareimg} alt = "" ></img>
          <img src={circleimg} alt = "" ></img>
          <img src={emptycircle} alt = "" ></img>
        </div>
           <h1>{props.pagetitle}</h1>
           <div className="blockheader">
               <span><FontAwesomeIcon icon={faHouseUser} ></FontAwesomeIcon>
               <Link to="/">  &nbsp;&nbsp;Home  </Link></span>
               <span className="page-title"> &nbsp;/  {props.pagetitle}</span>
           </div>
      </div>
    )
}
export default FixedHeader;