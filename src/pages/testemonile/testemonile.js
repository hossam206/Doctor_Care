// import css file
import './testemonile.css';
// import icons image
import plusimg from '../../images/Header/header icons/download.png'
import circleimg from '../../images/Header/header icons/emptycircle.png'
import pintagonimg from '../../images/Header/header icons/download (4).png'
import orangeimg from '../../images/Header/header icons/orangecircle.png'
// import doctors image
import image1 from '../../images/Testimonial/download (1).jfif';
import image2 from '../../images/Testimonial/download (2).jfif';
import image3 from '../../images/Testimonial/download (3).jfif';
import image4 from '../../images/Testimonial/download (4).jfif';
import image5 from '../../images/Testimonial/download (5).jfif';
import image6 from '../../images/Testimonial/download.jfif';
import circledoctoe from '../../images/Testimonial/download.png';
// import swiper
 // Import Swiper React components
import "swiper/css";
import "swiper/css/effect-cards";
 
// import required modules
import SimpleSlider from '../../component/Testemonile/Testemonilecomp';
function Testemonile ()
{
    return (
        <div className="testemonile">
         <div className =" floatingimg">
            <img src={plusimg}alt=""></img>
            <img src={circleimg}alt=""></img>
            <img src={pintagonimg}alt=""></img>
            <img src={orangeimg}alt=""></img>
            </div>
            <div className="container">
                <div className="testemonileheadig text-center">
                    <span className="text-secondary">Testimonial</span>
                    <h1 className="text-secondary text-center">See What Are The Patients <br></br>Saying About us
                    </h1>
                </div>
                <div className="row">
                    <div className="doctorimage col-lg-6 col-md-12 col-sm-12">
                         <div className="doctorimage">
                         <img src={circledoctoe} className ="bg-img" alt=""></img>
                             <ul>
                                 <li><img src={image1}alt=""></img></li>
                                 <li><img src={image2}alt=""></img></li>
                                 <li><img src={image3}alt=""></img></li>
                                 <li><img src={image4}alt=""></img></li>
                                 <li><img src={image5}alt=""></img></li>
                                 <li><img src={image6}alt=""></img></li>
                               
                             </ul>
                         </div>
                    </div>
                    <div className="testemonileswiper col-lg-6 col-md-12 col-sm-12">
                        <SimpleSlider/>      
                         </div>
                 </div>
               </div>
            </div>
 
    )
}
export default Testemonile;