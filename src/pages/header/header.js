import { Link } from 'react-router-dom';
import welcomeimg from '../../images/Header/doctor.7c2bc96d.png';
import circleimg from '../../images/Header/header icons/download (2).png';
import squareimg from  '../../images/Header/header icons/download (4).png';
import triangleimg from  '../../images/Header/header icons/download (3).png';

import './header.css';
function Header()
{
    return(
       <div className="header">
           

           <img src={triangleimg}alt="" className="traingle"></img>
           <img src={squareimg} alt="" className="square"></img>
          <div className="container">
           <div className="row">
             <div className="col-lg-6 col-md-6 col-sm-12">
                 <div className="leftdiv-details">
                     <img src={circleimg} alt="" className="circleimg"></img>
                     <p>we provide all health care solution</p>
                     <h1>protect your health and take care to of your health</h1>
                      <button className="btn btn-primary">
                        <Link to="/About">
                        Read More
                        </Link>
                        </button>
                  
                  </div>
             </div>
               <div className="col-lg-6 col-md-6 col-sm-12">
                   <div className="rightdiv-img">
                     <img src={welcomeimg} alt=""></img>
                   </div>
                   </div>
           </div>
          </div>
       </div>
       
    );
};
export default Header;