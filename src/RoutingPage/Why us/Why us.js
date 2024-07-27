import Footer from "../../component/footer/footer";
import FixedHeader from "../../component/Header/Fixed-Header";
import Latestnewscomp from "../../component/Latestnews/Latestnewscomp";
// import images
import image1 from '../../images/Latest News/pic1.jpg';
import image2 from '../../images/Latest News/pic2.jpg';
import image3 from '../../images/Latest News/pic7.c1733b79.jpg';
import image4 from '../../images/Latest News/pic-4.jpg';
import image5 from '../../images/Latest News/pic-5.jpg';
import image6 from '../../images/Latest News/pic-6.jpg';
import image7 from '../../images/Latest News/pic4.28ea761e.jpg';
import image8 from '../../images/Latest News/pic5.44c2a542.jpg';
import image9 from '../../images/Latest News/pic6.42f81537.jpg';
// doctor image
import docimg1 from '../../images/Latest News/doctorimage/download (1).jfif';
import docimg2 from '../../images/Latest News/doctorimage/download (2).jfif';
import docimg3 from '../../images/Latest News/doctorimage/download (3).jfif';
import docimg4 from '../../images/Latest News/doctorimage/download (4).jfif';
import docimg5 from '../../images/Latest News/doctorimage/download (5).jfif';
import docimg6 from '../../images/Latest News/doctorimage/download.jfif';
import docimg7 from '../../images/Latest News/doctorimage/download (3).jfif';
import docimg9 from '../../images/Latest News/doctorimage/download (4).jfif';
// import css file
import './why us.css'
function BlogsPage ()
{
    return(
    <>
        <FixedHeader pagetitle={'Why Us !'} />
        <div className="blogsblock">
        <div className="container">
        <div className="row"> 
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 blockblog">
              <Latestnewscomp headerimg={image1} iconimg={docimg1} name={'John deo'}   blockpara={'Dental Care for Women is very important'}/>
         </div>
         <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 blockblog">
            <Latestnewscomp headerimg={image2} iconimg={docimg2} name={'Peter Packer'} blockpara={'In this hospital there are special surgeon'}/>
         </div>
         <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 blockblog">
         <Latestnewscomp headerimg={image3} iconimg={docimg3} name={'Sonar Moyna'} blockpara={'Ten Gigantic Influences Of Health'}/>
         </div>
         <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 blockblog">
            <Latestnewscomp headerimg={image4} iconimg={docimg4} name={'Sonar Moyna'} blockpara={'Why Is Skin Surgeon Considered Underrated'}/>
         </div>
         <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 blockblog">
            <Latestnewscomp headerimg={image5} iconimg={docimg5} name={'Kalina'} blockpara={'Understand Health Before You Regret'}/>
         </div>
         <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 blockblog">
         <Latestnewscomp headerimg={image6} iconimg={docimg6} name={'Michel'} blockpara={'Health Will Be A Thing Of The Past And Here'}/>
         </div>
         <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 blockblog">
         <Latestnewscomp headerimg={image7} iconimg={docimg7} name={'Peter Packer'} blockpara={'Can you get a diflucan prescription online?'}/>
         </div>
         <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 blockblog">
         <Latestnewscomp headerimg={image8} iconimg={docimg7} name={'Sonar Moyna'} blockpara={'Ten Gigantic Influences Of Health'}/>
         </div>
         <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 blockblog">
         <Latestnewscomp headerimg={image9} iconimg={docimg9} name={'John deo'} blockpara={'Everyone need to go Dentist regularly'}/>
         </div>
        </div>
      </div>
  </div>
        <Footer/>
    </>
    )
}
export default BlogsPage;