// import component
import FixedHeader from "../../component/Header/Fixed-Header";
import Servicecomp from "../../component/service/servicecomp";
// import icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckMedical,faSuitcaseMedical,faStethoscope,faHouseChimneyMedical } from '@fortawesome/free-solid-svg-icons'
// import css file
import './service.css';
import Footer from "../../component/footer/footer";
import Testemonile from "../../pages/testemonile/testemonile";
function Servicepage ()
{
    return(
        <>
     <FixedHeader pagetitle ={'Services'}/>
     <div className="servicesBlocks">
      <div className="container">
          <div className="row">

            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <div className="service-block">
                <Servicecomp icon = {faTruckMedical} title={'Diagnostics'} paragaraph={'Phasellus venenatis porta rhoncus. Integer et viverra felis..'}/>
                </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 service-block">
                <Servicecomp icon = {faSuitcaseMedical} title={'Treatment'} paragaraph={'Phasellus venenatis porta rhoncus. Integer et viverra felis..'}/>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 service-block">
                <Servicecomp icon = {faStethoscope} title={'Surgery'} paragaraph={'Phasellus venenatis porta rhoncus. Integer et viverra felis.'}/>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 service-block">
                <Servicecomp icon = {faSuitcaseMedical} title={'Qualified Doctors'} paragaraph={'Phasellus venenatis porta rhoncus. Integer et viverra felis.'}/>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 service-block">
                <Servicecomp icon = {faHouseChimneyMedical} title={'Vaccine'} paragaraph={'Phasellus venenatis porta rhoncus. Integer et viverra felis.'}/>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 service-block">
                <Servicecomp icon = {faTruckMedical} title={'Emergency'} paragaraph={'Phasellus venenatis porta rhoncus. Integer et viverra felis.'}/>
            </div>
          </div>
      </div>
     </div>
     <Testemonile/>
     <Footer/>
     </>
    )
}
export default Servicepage;