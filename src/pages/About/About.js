import './About.css';
// import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckMedical,faSuitcaseMedical,faStethoscope,faHouseChimneyMedical } from '@fortawesome/free-solid-svg-icons'
// import images 
import squareimg from  '../../images/Header/header icons/download (4).png';
import img1 from '../../images/About us/pic-3.fa689b10.jpg';
import img2 from '../../images/About us/pic-1.ad1ed7ee.jpg';
import img3 from '../../images/About us/doctor-nurses-special-equipment (1).jpg';
import img4 from '../../images/About us/pic-2.0593bc2f.jpg';
import waveimg from '../../images/Header/header icons/download (1).png'
function About ()
{
    return (
       <div className ="About">
           <div className="container">
               <div className="row">
                   <div className="col-lg-5 col-md-12 colo-sm-12">
                        <div className="images">
                            <img src={img2} alt=""></img>
                            <img src={img3} alt="" ></img>
                            <img src={img1} alt="" ></img>
                            <img src={img4} alt="" ></img>
                        </div>
                   </div>
                   <div className="col-lg-7 col-md-12 colo-sm-12 ">
                       <div className="AboutDetail">
                           <img src={squareimg} alt=""  className="square"></img>
                       <h1> About us </h1>
                       <p>The Great Place Of Medical Hospital Center</p>
                       <span>We provide the special tips and advice’s of heath care treatment and high level of best technology involve in the our hospital</span>

                       <ul className="service">
                           <li><span className="first"><FontAwesomeIcon icon ={faTruckMedical}></FontAwesomeIcon></span> Emergency Help</li>
                           <li><span className="second"><FontAwesomeIcon icon ={faSuitcaseMedical}></FontAwesomeIcon></span>Best Professionals</li>
                           <li><span className="third" ><FontAwesomeIcon icon ={faStethoscope}></FontAwesomeIcon></span>Qualified Doctors</li>
                           <li><span className="forth" ><FontAwesomeIcon icon ={faHouseChimneyMedical}></FontAwesomeIcon></span>Medical Treatment</li>
                       </ul>
                           <button className="btn btn-info">Read More</button>
                           <img src={waveimg} alt=""  className="wave"></img>
                       </div>
                   </div>
               </div>
           </div>
       </div>
    )
}
export default About;