import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../images/Logo/download.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
function Navbar() {
  useEffect(() => {
    window.addEventListener("scroll", fixednav);
  }, []);
  //  fixed navbar
  const [stickyClass, setStickyClass] = useState("relative");
  const fixednav = () => {
    {
      window.scrollY > 200
        ? setStickyClass("fixnav")
        : setStickyClass("relative");
    }
  };

  // scroll up
  const SlideUp = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-body-tertiary ${stickyClass}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={Logo}></img>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item" onClick={SlideUp}>
                <Link className="nav-link active" aria-current="page" to={"/"}>
                  Home
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  pages
                </a>
                <ul className="dropdown-menu">
                  <li onClick={SlideUp}>
                    <Link className="dropdown-item" to="/About">
                      About us{" "}
                    </Link>
                  </li>
                  <li onClick={SlideUp}>
                    <Link className="dropdown-item" to="/OurTeam">
                      our team
                    </Link>
                  </li>
                  <li onClick={SlideUp}>
                    <Link className="dropdown-item" to="/Bookingpage">
                      Booking
                    </Link>
                  </li>
                  <li onClick={SlideUp}>
                    <Link className="dropdown-item" to="/Login">
                      Login/Register
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown" onClick={SlideUp}>
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  services
                </a>
                <ul className="dropdown-menu">
                  <li onClick={SlideUp}>
                    <Link className="dropdown-item" to="/Service">
                      Service{" "}
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown" onClick={SlideUp}>
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Why Us ?
                </a>
                <ul className="dropdown-menu" onClick={SlideUp}>
                  <li>
                    <Link className="dropdown-item" to="/BlogsPage">
                      Why us!
                    </Link>
                  </li>
                  <li onClick={SlideUp}>
                    <Link className="dropdown-item" to="/whyusDetails">
                      Why-us Details
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to={"/search"} className="nav-link">
                  <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                </Link>
              </li>
              <Link to="/contact" onClick={SlideUp}>
                <button className="btn btn-danger">contact us</button>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
