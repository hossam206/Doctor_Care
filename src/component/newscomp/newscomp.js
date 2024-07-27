import React, { Component } from "react";
import Slider from "react-slick";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div className="testemonileslider">
        <h2> Multiple items </h2>
        <Slider {...settings}>
          <div className="testemonilecomp">
          <div className="testemonilecontent">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecena ssuspendisse ultrices gravida.</p>
            </div>

            <div className="clientinfo">
                <h3>john Doe</h3>
                <span>Patient</span>
            </div>

          </div>
        </Slider>
      </div>
    );
  }
}
