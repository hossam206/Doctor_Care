// import images
import docimg1 from '../../images/Latest News/doctorimage/download (1).jfif';
import docimg2 from '../../images/Latest News/doctorimage/download (2).jfif';
import docimg3 from '../../images/Latest News/doctorimage/download (3).jfif';
import docimg4 from '../../images/Latest News/doctorimage/download (4).jfif';
import docimg5 from '../../images/Latest News/doctorimage/download (5).jfif';
import docimg6 from '../../images/Latest News/doctorimage/download.jfif';
// import component
import Footer from "../../component/footer/footer";
import FixedHeader from "../../component/Header/Fixed-Header";
import BestDoctorblock from "../../component/AboutUsRouting/Best Doctors/Best Doctor";
function OurTeamPage ()
{
    return (
     <>
     <FixedHeader pagetitle={'our team'}/>
     {/* start best doctors */}
     <div className="BestDoctors">
              <div className="container">             
              <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-30">
                    <BestDoctorblock Doctorimg={docimg1} Doctorname={'Dr. Addition Smith'} Doctorjob={'Dentist'}/>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-30">
                    <BestDoctorblock Doctorimg={docimg2} Doctorname={'Dr. Mahfuz Riad'} Doctorjob={'Chiropractor'}/>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-30">
                    <BestDoctorblock Doctorimg={docimg3} Doctorname={'Dr. David Benjamin'} Doctorjob={'Cardiologist'}/>
                  </div> 
                    
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-30">
                    <BestDoctorblock Doctorimg={docimg4} Doctorname={'Dr. Addition Smith'} Doctorjob={'Dentist'}/>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-30">
                    <BestDoctorblock Doctorimg={docimg5} Doctorname={'Dr. Mahfuz Riad'} Doctorjob={'Chiropractor'}/>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-30">
                    <BestDoctorblock Doctorimg={docimg6} Doctorname={'Dr. David Benjamin'} Doctorjob={'Cardiologist'}/>
                  </div>
                  
                  </div>
              </div>
  
          </div>
     {/* end best doctors */}
     <Footer/>
     </>
    )
}
export default OurTeamPage;