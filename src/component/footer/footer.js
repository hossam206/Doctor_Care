// import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
// import images
import ImgLogo from "../../images/Logo/download.png";
import plusimg from "../../images/Header/header icons/download.png";
import pintagonimg from "../../images/Header/header icons/download (4).png";
import plus from "../../images/footer/download.png";
import smallimg from "../../images/footer/download (1).png";
// import icons
import facebook from "../../images/icons/facebook.png";
import instagram from "../../images/icons/instagram.png";
import linkedin from "../../images/icons/linked in.png";
import whatsapp from "../../images/icons/whatsapp.png";
// import css file
import "./footer.css";
import { Link } from "react-router-dom";
function Footer() {
  const SlideUp = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className=" floatedgimg">
              <img src={plusimg} alt=""></img>
              <img src={pintagonimg} alt=""></img>
              <img src={plus} alt=""></img>
            </div>
            <div className="footerlogo">
              <img src={ImgLogo} alt=""></img>
            </div>
            <div className="footerparag">
              <p>
                Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore
                smod tempor incididunt ut labore et.
              </p>
            </div>
            <div className="footercontact">
              <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
              <p>
                <span>Contact Us</span>+01 123 456 7890
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="quickLinks">
              <h1>Quick Links</h1>
              <img src={smallimg} alt="" className="headeingimg"></img>
              <ul className="links">
                <li onClick={SlideUp}>
                  <Link to="/About">about us</Link>{" "}
                </li>
                <li onClick={SlideUp}>
                  <Link to="/Service">services</Link>
                </li>
                <li onClick={SlideUp}>
                  <Link to="/Bookingpage">booking</Link>
                </li>
                <li onClick={SlideUp}>
                  <Link to="/">faqs</Link>
                </li>
                <li onClick={SlideUp}>
                  <Link to="/BlogsPage">Why Us!</Link>
                </li>
                <li onClick={SlideUp}>
                  <Link to="/OurTeam">our team</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="Our-Service">
              <h1>Our Service</h1>
              <img src={smallimg} alt="" className="headeingimg"></img>
              <ul className="links">
                <li>
                  <a href="#">dental care</a>{" "}
                </li>
                <li>
                  <a href="#">cardiac clinic</a>{" "}
                </li>
                <li>
                  <a href="#">message therapy</a>
                </li>
                <li>
                  <a href="#">cardiology</a>
                </li>
                <li>
                  <a href="#">precise diagnosis</a>
                </li>
                <li>
                  <a href="#">ambulance srvices</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="subscribe">
              <h1>Subcribe</h1>
              <img src={smallimg} alt="" className="headeingimg"></img>
              <div className="form">
                <input type="email" placeholder="Email Address"></input>
                <button className="btn btn-info">Subscribe Now</button>
              </div>
              <ul className="social">
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
                <li>
                  <a href="#">
                    <img src={whatsapp} alt=""></img>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="endmessage text-center">
          <span></span>
          <span>
            Copyright © 2022 Design & Developed by<a href="#">Hossam Mohamed</a>
          </span>
        </div>
      </div>
    </div>
  );
}
export default Footer;
