import React, { Component } from 'react';
import "../Chose/Chose.css"
import {IoIosArrowRoundForward} from "react-icons/io"

import sic from "../Images/new.jpg"
import web from "../Images/gal.jpg"
class Chose extends Component {
    state = {  }
    render() { 
        return (  
            <>
            <section class="chose-us-area pos-rel pb-70">
            <div class="chose-shape2 pos-abl d-none d-lg-block"><img src="https://www.devsnews.com/template/spower/spower/assets/img/shape/round01.png" className="App-logo" alt=""/>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-12">
                        <div class="row align-items-center chose mb-30">
                            <div class="col-sm-6">
                                <div class="chose__img__three mb-30" data-tilt data-tilt-max="4">
                                    <img class="img-fluid" src={sic}alt=""/>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="chose__img__four mb-30" data-tilt data-tilt-max="4">
                                            <img class="img-fluid" src={web} alt=""/>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="chose__img__five mb-30" data-tilt data-tilt-max="4">
                                            <img class="img-fluid" src="https://www.devsnews.com/template/spower/spower/assets/img/chose/chose5.jpg" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-5 col-lg-6 col-md-12">
                        <div class="chose-wrapper ml-50">
                            <div class="section-title text-left mb-25">
                                <h6 class="mb-25">Who we are</h6>
                                <h2 class="mb-25">We have 40 Years Of
                                    Experience </h2>
                                <p>
                                Founded in 1980s, SILVER OAKS  owns and manages a portfolio of hospitality assets and brands including Address Hotels + Resorts, Luxury Apartments and Malls, in addition to serviced residences, leisure clubs, and a comprehensive portfolio of restaurants.
                                 The group plans to introduce its brands in key gateway cities and destinations in Pakistan.
                                </p>
                            </div>
                            <div class="skills d-sm-flex mb-20">
                                <div class="skills__icon mr-20">
                                    <i class="flaticon-solar-panel"></i>
                                </div>
                                <div class="skills__text">
                                    <h6>Silver Oaks luxury appartments </h6>
                                    <p>
                                    Located in F-10 Markaz, Blue Area Islamabad and facing Capital park, Silver Oaks is an address you’d be happy to call home. 
                                    </p>
                                </div>
                            </div>
                            <div class="skills d-sm-flex mb-35">
                                <div class="skills__icon mr-20">
                                    <i class="flaticon-solar-panel"></i>
                                </div>
                                <div class="skills__text">
                                    <h6>Maroof International Hospitial</h6>
                                    <p>
                                    MAROOF International Hospital is a new ‘Boutique’ healthcare facility situated in the F-10 sector of Islamabad. It is located only a few breaths away from the magnificent Margallas and facing the serene park of F-9 sector in Islamabad
                                    </p>
                                </div>
                            </div>
                            <a href="/About" class="theme_btn theme_btn2">Read More <i
                                  >
                                        <IoIosArrowRoundForward/>
                                      </i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            </>
        );
    }
}
 
export default Chose;