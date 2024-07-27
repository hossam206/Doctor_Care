// import image
import faceimg from '../../images/icons/facebook.png'
import instaimg from '../../images/icons/instagram.png'
import whatsimg from '../../images/icons/whatsapp.png'
// import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapLocationDot,faSquareEnvelope,faEarthAmericas,faTriangleExclamation} from '@fortawesome/free-solid-svg-icons'
   
// import css file
import FixedHeader from '../../component/Header/Fixed-Header';
import './contact-us.css'
import Footer from '../../component/footer/footer'
import { useState } from 'react'
function ContactUs ()
{ 
    const [show,setshow] = useState(false)
    const [name,setname] = useState('')
//checke input validation
     const SetName = (e)=>
     {
        setname(e.target.value)
     }
     const validateinput = (e) =>{
      if(name.length == '')
      {
          setshow(true)
      }else
      {
        setshow(false)
      }
    }

   
    return (
       <>
       <FixedHeader pagetitle={'Contact Us'}/>
        <div className="container">
            <div className="contactUs-sec">
                <div className="container ">
                    <div className="row">
                        <div className="contactus-form  col-lg-7 col-md-12 col-sm-12">
                           <input type="text" placeholder="Your Name"onChange={SetName}></input>
                            { show && <p className="required"><FontAwesomeIcon icon={faTriangleExclamation}></FontAwesomeIcon>Required field</p>}
                           <input type="e-mail" placeholder="email" onChange={SetName}></input>
                           { show && <p className="required"><FontAwesomeIcon icon={faTriangleExclamation}></FontAwesomeIcon>Required field</p>}
                           <input type="number" placeholder="phone number" onChange={SetName}></input>
                           { show && <p className="required"><FontAwesomeIcon icon={faTriangleExclamation}></FontAwesomeIcon>Required field</p>}
                           <select onChange={SetName}>
                               <option>Selecty Department</option>
                               <option>one</option>
                               <option>two</option>
                               <option>three</option>
                           </select>
                           <textarea placeholder="type message">
                           </textarea>
                           <button onClick={validateinput}>Submit</button>
                        </div>
                        <div className="contactus-infor col-lg-5 col-md-12 col-sm-12">
                               <div className="overlay">
                            <div className="contactus-info">
                                <h2>Contact Us For Any Informations</h2>
                             <div className="location">
                              <span><FontAwesomeIcon icon={faMapLocationDot}></FontAwesomeIcon>Location</span>
                              <p>2023 Stokes Isle Apt. 896, Venaville 10010, USA</p>
                             </div>

                                <div className="email">
                                <span><FontAwesomeIcon icon={faSquareEnvelope}></FontAwesomeIcon>Email & Phone</span>
                                   <p>info@yourdomain.com
                                    (+68) 120034509</p>
                                </div>

                                 <div className="followus">
                                 <span><FontAwesomeIcon icon={faEarthAmericas}></FontAwesomeIcon>Follow Us </span>
                                 <div className="social">
                                     <img src={faceimg} alt=""></img>
                                     <img src={instaimg} alt=""></img>
                                     <img src={whatsimg} alt=""></img>
                                 </div>
                                 </div>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
       </>

    )
}
export default ContactUs;

   