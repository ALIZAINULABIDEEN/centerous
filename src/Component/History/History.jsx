import React, { Component } from 'react';
import "../History/History.css"
import {IoIosArrowRoundForward} from "react-icons/io"
import web from "../Images/mega.jpg"
import pic from "../Images/Mao.jpg"
import sic from "../Images/new.jpg"
import ScrollAnimation from 'react-animate-on-scroll';

class History extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <section class="history-area-02 pos-rel pt-125 pb-100">
            <div class="history-shape-one pos-abl d-none d-md-block">
                <img src="https://www.devsnews.com/template/spower/spower/assets/img/shape/round01.png" className="App-logo" alt=""/>
                    </div>
            <div class="container">
                <div class="row mb-50">
                    <div class="col-xl-6 col-lg-6 col-md-6">
                        <div class="section-title text-left mb-75">
                            <h6 class="mb-25">About us</h6>
                            <h2>Pakistan's premier provider of enriching, personal and memorable lifestyle experiences.</h2>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6">
                        <div class="histories white-bg mb-30">
                            <div class="histories__text">
                                <p class="left-line pl-45 mb-15 pos-rel">
                                    Silver Oaks is Pakistan's most valueable and admired real estate development companies.With proven competencies in properties, 
                                 shopping malls & retail and hospitality & leisure, silver oaks shapes new life style with a focous on design excellence, build quality 
                                 and timely delivery. 
                                </p>
                                <a href="/About" class="theme_btn blog_btn ml-45">Read More <i
                                        >
                                              <IoIosArrowRoundForward/>
                                            </i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="portfolio portfolios pos-rel mb-30">
                            <h1>01</h1>
                            <div class="portfolio__thumb pos-rel">
                                <a href="#">
                                <img class="img-fluid" src={sic} alt=""/>
                                
</a>
                            </div>
                            <div class="portfolio__content pos-abl text-center">
                                <h6>Solar Power</h6>
                                <h3><a href="portfolio-details.html">Wind Turbine</a></h3>
                                <a class="popup-image" href="assets/img/portfolio/portfolio7.jpg"><i class="far fa-long-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="portfolio portfolios pos-rel mb-30">
                            <h1>02</h1>
                            <div class="portfolio__thumb pos-rel">
                            <ScrollAnimation animateIn="fadeleft" animateOnce={true}>
                                <img class="img-fluid" src={pic}
                                  style={{height:"283px"}}
                                alt=""/>
                                </ScrollAnimation>
                            </div>
                            <div class="portfolio__content pos-abl text-center">
                                <h6>Solar Power</h6>
                                <h3><a href="portfolio-details.html">Wind Turbine</a></h3>
                                <a class="popup-image" href="assets/img/portfolio/portfolio8.jpg"><i class="far fa-long-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="portfolio portfolios pos-rel mb-30l">
                            <h1>03</h1>
                            <div class="portfolio__thumb pos-rel">
                                <img class="img-fluid w-100"
                                style={{height:"283px"}}
                                src={web} alt=""/>
                            </div>
                            <div class="portfolio__content pos-abl text-center">
                                <h6>Solar Power</h6>
                                <h3><a href="portfolio-details.html">Wind Turbine</a></h3>
                                <a class="popup-image" href="assets/img/portfolio/portfolio9.jpg"><i>
                                  
                                    </i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            </>
         );
    }
}
 
export default History;