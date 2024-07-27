// import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket,faFilePdf,faFile } from '@fortawesome/free-solid-svg-icons'
// import images
import headerimg from '../../../images/Latest News/pic1.jpg';
// import component
import Footer from "../../../component/footer/footer";
import FixedHeader from "../../../component/Header/Fixed-Header";
// import css file
import './Why-us-Details .css'; 
function WhyUsDetails ()
{ 
    return (      
        <>
     <FixedHeader pagetitle={'Details'}/>
       <div className="container">
           <div className="whyUsContent">
             <div className="row">
               <div className="col-lg-8 col-md-12 col-sm-12 leftdiv">
                      <div className="headerimg">
                          <img src={headerimg} alt=""></img>
                        <h1>Why Medical Had Been So Popular Till</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                      </div>
                      <div className="row align-items-center" >
                        <div className="col-md-6">
                          <ul className="listCheckSquare">
                              <li>Then along come two they</li>
                              <li>That’s just a little bit more than</li>
                              <li>Standard dummy text ever since</li>
                              <li>Simply dummy text of the printing</li>
                              <li>Make a type specimen book</li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <div className="skillbar mb-30">
                             <h6>Advanced Technology</h6>
                             <div className="skillapeer">
                                 <p className="skill-bar-width one"></p>
                                 <span className="skil-bar-percent">96%</span>
                             </div>
                          </div>

                          <div className="skillbar mb-30">
                             <h6>Certified Engineers</h6>
                             <div className="skillapeer">
                                 <p className="skill-bar-width two"></p>
                                 <span className="skil-bar-percent">85%</span>
                             </div>
                          </div>

                          <div className="skillbar mb-30">
                             <h6>6 years Experience</h6>
                             <div className="skillapeer">
                                 <p className="skill-bar-width three"></p>
                                 <span className="skil-bar-percent">75%</span>
                             </div>
                          </div>

                          <div className="skillbar mb-30">
                             <h6>Patient Care</h6>
                             <div className="skillapeer">
                                 <p className="skill-bar-width four"></p>
                                 <span className="skil-bar-percent">98%</span>
                             </div>
                          </div>
                        </div>
                      </div>
                <div className="popular-Question">
                    <div className="popular-heading">
                        <h3>Popular Questions</h3>
                        <p>Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    </div>

                    <div className="togglequestion">
                    <div className="dropdown questionblock">
                    <a className="btn btn-secondary dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      How Doctor Can Ease Your Pain?
                    </a>

                    <ul className="dropdown-menu qustionDetails">
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
                
                    </ul>
                    </div>

                    <div className="dropdown questionblock">
                    <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    How do I withdraw from a subject?
                    </a>

                    <ul className="dropdown-menu qustionDetails">
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
                
                    </ul>
                    </div>

                    <div className="dropdown questionblock">
                    <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                     Understand Doctor Before You Regret?
                    </a>

                    <ul className="dropdown-menu qustionDetails">
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
                
                    </ul>
                    </div>

                    <div className="dropdown questionblock">
                    <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    What types of systems do you support?
                    </a>

                    <ul className="dropdown-menu qustionDetails">
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
                
                    </ul>
                    </div>
                    </div>
                    
                </div>
             </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
               <div className="blockone">
                   <ul className="blockoneList">
                       <li className="active">Engine Diagnostics
                       <span>
                               <FontAwesomeIcon icon={faRightToBracket}></FontAwesomeIcon>
                               </span>
                       </li>
                       <li>Tire and Wheel Services
                           <span>
                               <FontAwesomeIcon icon={faRightToBracket}></FontAwesomeIcon>
                               </span>
                               </li>
                       <li>Lube oil and Filters
                       <span>
                               <FontAwesomeIcon icon={faRightToBracket}></FontAwesomeIcon>
                               </span>
                       </li>
                       <li>Belts and Hoses
                       <span>
                               <FontAwesomeIcon icon={faRightToBracket}></FontAwesomeIcon>
                               </span>
                       </li>
                       <li>Air Conditioning
                       <span>
                               <FontAwesomeIcon icon={faRightToBracket}></FontAwesomeIcon>
                               </span>

                       </li>
                       <li>Brake Repair
                       <span>
                               <FontAwesomeIcon icon={faRightToBracket}></FontAwesomeIcon>
                               </span>
                       </li>
                   </ul>
               </div>
                
                <div className="block2">
                        <div className="block2heading">
                        <h4>Download</h4>
                        <span className="h4bar"></span>
                        </div> 
                <ul>
                    <li>
                    <FontAwesomeIcon icon={faFilePdf}></FontAwesomeIcon>
                    <div>
                        <p>Download Our Brochures</p>
                        <a href="#">Download</a>
                    </div>
                    </li>    
                    <li>
                    <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
                    <div>
                        <p>Our hospital Details</p>
                        <a href="#">Download</a>
                    </div>
                     </li>    
                </ul>             
                </div>
                </div>
            </div>
        </div>
     </div>
{/* footer component */}
            <Footer/>
       </>
    )
}
export default WhyUsDetails;

   