// import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft  } from '@fortawesome/free-solid-svg-icons'

import React, { Component } from "react";
import Slider from "react-slick";
// import css file
import './Testemonilecomp.css'
export default class SimpleSlider extends Component {
  render() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <>
      
            
      <div className="row">
      <div className="testemonileslider col-lg-12 col-md-12 col-sm-12">  
 
        <Slider {...settings}>
       
          <div className="testemonilecomp">
          <div className="testemonilecontent">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecena ssuspendisse ultrices gravida.</p>
            </div>
            <div className="quoteicon">
                <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
            </div>
            <div className="clientinfo">
                <h3>john Doe</h3>
                <span>Patient</span>
            </div>

          </div>

          <div className="testemonilecomp">
          <div className="testemonilecontent">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecena ssuspendisse ultrices gravida.</p>
            </div>
            <div className="quoteicon">
                <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
            </div>
            <div className="clientinfo">
                <h3>john Doe</h3>
                <span>Patient</span>
            </div>

          </div>

          <div className="testemonilecomp">
          <div className="testemonilecontent">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecena ssuspendisse ultrices gravida.</p>
            </div>
            <div className="quoteicon">
                <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
            </div>
            <div className="clientinfo">
                <h3>john Doe</h3>
                <span>Patient</span>
            </div>

          </div>

          <div className="testemonilecomp">
          <div className="testemonilecontent">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecena ssuspendisse ultrices gravida.</p>
            </div>
            <div className="quoteicon">
                <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
            </div>
            <div className="clientinfo">
                <h3>john Doe</h3>
                <span>Patient</span>
            </div>
          </div>
 
        </Slider>
        </div>
      </div>
    
      </>
    );
  }
}
