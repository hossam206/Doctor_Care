// import react router
import "./App.css";
import { Route, Routes } from "react-router";
import Footer from "./component/footer/footer";
import Navbar from "./component/Navbar/Navbar";
import About from "./pages/About/About";
import Book from "./pages/BookAponintment/Book";
import Header from "./pages/header/header";
import Latestnews from "./pages/Latest News/Latest News";
import Service from "./pages/services/service";
import Testemonile from "./pages/testemonile/testemonile";
import Working from "./pages/working/working";
import AboutusRouting from "./RoutingPage/Aboutpage/AboutUs.page";
import OurTeamPage from "./RoutingPage/Our Team/OurTeam";
import Bookingpage from "./RoutingPage/Booking/Booking";
import BlogsPage from "./RoutingPage/Why us/Why us";
import Servicepage from "./RoutingPage/Servicespage/Service";
import Login from "./component/AboutUsRouting/Best Doctors/Login&Register/Login";
import WhyUsDetails from "./RoutingPage/Why us/Why-us Details/Why-us-Details";
import ContactUs from "./pages/contact us/contact-Us";
import Search from "./component/search/search";
import { GoUp } from "./component/go_up_btn/Go_Up";

function App() {
  return (
    <>
      <GoUp />
      <Navbar />
      {/* start Routing */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <About />
              <Working />
              <Book />
              <Service />
              <Testemonile />
              <Latestnews />
              <Footer />
            </>
          }
        />
        <Route path="About" element={<AboutusRouting />} />
        <Route path="OurTeam" element={<OurTeamPage />} />
        <Route path="Bookingpage" element={<Bookingpage />} />
        <Route path="BlogsPage" element={<BlogsPage />} />
        <Route path="whyusDetails" element={<WhyUsDetails />} />
        <Route path="Service" element={<Servicepage />}></Route>
        <Route path="Login" element={<Login />}></Route>
        <Route path="search" element={<Search />}></Route>
        <Route path="contact" element={<ContactUs />}></Route>
      </Routes>
    </>
  );
}

export default App;
