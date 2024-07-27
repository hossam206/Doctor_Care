// import icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
// import css
import './servicecomp.css';
function Servicecomp(props)
{
    return(
        <div className="serviceblock">
          <div className="icondiv">
              <FontAwesomeIcon icon={props.icon}></FontAwesomeIcon>
          </div>
              <span>{props.title}</span>
              <p>{props.paragaraph}</p>
              <button className="btn btn-primary">
                  <Link to="/Service">
                  View More
                  </Link>
                  </button>        
        </div>
    )
}
export default Servicecomp;
