import AboutpagecompThirdsec from "../../component/AboutUsRouting/AboutusThirdSec";
import BestDoctorblock from "../../component/AboutUsRouting/Best Doctors/Best Doctor";
import Footer from "../../component/footer/footer";
import FixedHeader from "../../component/Header/Fixed-Header";
import About from "../../pages/About/About";
import Testemonile from "../../pages/testemonile/testemonile";
// import BestDoctorblock img
import image1 from "../../images/Latest News/pic1.jpg";
import image2 from "../../images/Latest News/pic2.jpg";
import image3 from "../../images/Latest News/pic3.jpg";
import docimg1 from "../../images/Latest News/doctorimage/download (1).jfif";
import docimg2 from "../../images/Latest News/doctorimage/download (3).jfif";
import docimg3 from "../../images/Latest News/doctorimage/download (2).jfif";
// import css file
import "./AboutUspage.css";
import Latestnewscomp from "../../component/Latestnews/Latestnewscomp";
function AboutusRouting() {
  return (
    <>
      <FixedHeader pagetitle={"about us"} />
      <About />
      <AboutpagecompThirdsec />
      <div className="BestDoctors">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
              <BestDoctorblock
                Doctorimg={docimg1}
                Doctorname={"Dr. Addition Smith"}
                Doctorjob={"Dentist"}
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
              <BestDoctorblock
                Doctorimg={docimg2}
                Doctorname={"Dr. Mahfuz Riad"}
                Doctorjob={"Chiropractor"}
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
              <BestDoctorblock
                Doctorimg={docimg3}
                Doctorname={"Dr. David Benjamin"}
                Doctorjob={"Cardiologist"}
              />
            </div>
          </div>
        </div>
      </div>
      <Testemonile />
      <div className="latestnews">
        <div className="container">
          <div className="row">
            <div className="newsblocks col-lg-4 col-md-6 col-sm-12">
              <Latestnewscomp
                headerimg={image1}
                name={"john Doe"}
                iconimg={docimg1}
                blockpara={"in this hospital there are special surgeon"}
              />
            </div>
            <div className="newsblocks col-lg-4 col-md-6 col-sm-12">
              <Latestnewscomp
                headerimg={image2}
                name={"john Doe"}
                iconimg={docimg2}
                blockpara={"in this hospital there are special surgeon"}
              />
            </div>
            <div className="newsblocks col-lg-4 col-md-6 col-sm-12">
              <Latestnewscomp
                headerimg={image3}
                name={"john Doe"}
                iconimg={docimg3}
                blockpara={"in this hospital there are special surgeon"}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default AboutusRouting;
