// import images
import image1 from '../../images/Latest News/pic9.9ca3a042.jpg';
import image2 from '../../images/Latest News/pic7.c1733b79.jpg';
import image3 from '../../images/Latest News/pic-4.jpg';
// import doctor image
import docimg1 from '../../images/Latest News/doctorimage/download (1).jfif';
import docimg2 from '../../images/Latest News/doctorimage/download (3).jfif';
import docimg3 from '../../images/Latest News/doctorimage/download (5).jfif';
// Import Swiper React components
 
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import component and css file
import Latestnewscomp from '../../component/Latestnews/Latestnewscomp'
import './Latest News.css'
function Latestnews ()
{
    return (
           <div className="latestnews">
                 <div className="latestnewsheadig text-center">
                    <span className="text-secondary">Latest News</span>
                    <h1 className="text-secondary text-center"> Our Latest News
                    </h1>
                </div>
               <div className="container">
                   <div className="row">
                       <div className="newsblocks col-lg-4 col-md-6 col-sm-12">
                        <Latestnewscomp headerimg={image1} name={'john Doe'}
                        iconimg={docimg1} blockpara={'in this hospital there are special surgeon'} />
                            </div>

                            <div className="newsblocks col-lg-4 col-md-6 col-sm-12">
                            <Latestnewscomp headerimg={image2} name={'john Doe'}
                            iconimg={docimg2} blockpara={'in this hospital there are special surgeon'} />
                            </div>
                            <div className="newsblocks col-lg-4 col-md-6 col-sm-12">
                            <Latestnewscomp headerimg={image3} name={'john Doe'}
                            iconimg={docimg3} blockpara={'in this hospital there are special surgeon'} />
                            </div>
   
                   </div>
                   </div>
             
           </div>
    )
    
}
export default Latestnews;