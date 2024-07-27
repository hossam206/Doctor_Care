import "./BestDoctor.css";
// import icons
import facebook from "../../../images/icons/facebook.png";
import instagram from "../../../images/icons/instagram.png";
import linkedin from "../../../images/icons/linked in.png";
import whatsapp from "../../../images/icons/whatsapp.png";
function BestDoctorblock(props) {
  return (
    <div className="BestDoctor">
      <div className="BestDoctor-img">
        <img src={props.Doctorimg} alt=""></img>
      </div>
      <div className="BestDoctor-Name">
        <h1>{props.Doctorname}</h1>
      </div>
      <div className="BestDoctor-speciality">
        <span>{props.Doctorjob}</span>
      </div>
      <div className="social">
        <ul className="social-Links">
          <li>
            <a href="#">
              <img src={facebook} alt=""></img>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={instagram} alt=""></img>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={linkedin} alt=""></img>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default BestDoctorblock;
