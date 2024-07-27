import "./service.css";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Servicecomp from "../../component/service/servicecomp";
import {
  faTruckMedical,
  faSuitcaseMedical,
  faStethoscope,
} from "@fortawesome/free-solid-svg-icons";

function Service() {
  return (
    <div className="services">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4">
            <div className="col-lg-12 service-detail">
              <span>Services</span>
              <h1>We Cover A Big Variety Of Medical Services</h1>
              <p>
                We provide the special tips and advice’s of heath care treatment
                and high level of best.
              </p>
              <button className="btn btn-success">
                <Link to="/Service">All services</Link>
              </button>
            </div>
          </div>
          <div className="col-lg-8 com-md-8 col-sm-12 blocks">
            <Swiper
              slidesPerView={2}
              spaceBetween={40}
              breakpoints={{
                480: {
                  width: 333,
                  slidesPerView: 1,
                },
                767: {
                  slidesPerView: 2,
                },
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide className="serviceswiper">
                <Servicecomp
                  icon={faTruckMedical}
                  title={"Emergency"}
                  paragaraph={
                    "Phasellus venenatis porta rhoncus. Integer et viverra felis."
                  }
                />{" "}
              </SwiperSlide>
              <SwiperSlide className="serviceswiper">
                <Servicecomp
                  icon={faSuitcaseMedical}
                  title={"Diagnostics"}
                  paragaraph={
                    "Phasellus venenatis porta rhoncus. Integer et viverra felis."
                  }
                />
              </SwiperSlide>
              <SwiperSlide className="serviceswiper">
                <Servicecomp
                  icon={faStethoscope}
                  title={"Treatment"}
                  paragaraph={
                    "Phasellus venenatis porta rhoncus. Integer et viverra felis."
                  }
                />
              </SwiperSlide>
              <SwiperSlide className="serviceswiper">
                <Servicecomp
                  icon={faSuitcaseMedical}
                  title={"Suegery"}
                  paragaraph={
                    "Phasellus venenatis porta rhoncus. Integer et viverra felis."
                  }
                />
              </SwiperSlide>
              <SwiperSlide className="serviceswiper">
                <Servicecomp
                  icon={faTruckMedical}
                  title={"Vaccine"}
                  paragaraph={
                    "Phasellus venenatis porta rhoncus. Integer et viverra felis."
                  }
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Service;
