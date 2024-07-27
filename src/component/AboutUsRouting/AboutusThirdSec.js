import AboutUsBlock from "./Aboutus3rdblock";
import "./AboutUsRoutingThirdSec.css";
function AboutpagecompThirdsec() {
  return (
    <>
      <div className="Aboutus3rd-blocks">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-3 col-md-6 col-sm-12 mb-30">
              <AboutUsBlock />
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12 mb-30">
              <AboutUsBlock />
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12 mb-30">
              <AboutUsBlock />
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12 mb-30">
              <AboutUsBlock />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutpagecompThirdsec;
