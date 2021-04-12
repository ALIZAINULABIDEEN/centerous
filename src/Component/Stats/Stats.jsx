import React, { Component } from 'react';
import CountUp from 'react-countup';
// import Counter from '../Counter';
import "../Stats/Stats.css"
// import "../Stats/Stats.scss"
class Stats extends Component {
    state = {  }
    render() { 
        return (  
            <>
            <section class="statistics-area pb-45">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 offset-xl-3">
                        <div class="section-title text-center mb-80 mr-40 ml-40">
                            <h6 class="mb-25 mt-5">Company Statistics</h6>
                            <h2>Confidence & Trusted
                                In Your Security</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-6 col-lg-12 col-md-12">
                        <div class="row">
                            <div class="col-xl-6 col-lg-6 col-md-6">
                                <div class="h2-counter-box mb-30 pb-40">
                                    <div class="h2-counter-box__icon mb-20">
                                        <i class="far fa-plus"></i>
                                    </div>
                                    <h5 class="semi-title mb-10">Project Compalte</h5>
                                    <p class="mb-10">But I must explain to you how all
                                        mistaken idea denouncing ple</p>
                                    <h2><span class="counter">
                                        
                                    <CountUp
                                            end={362}
                                            duration={30}
                                            /></span></h2>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6">
                                <div class="h2-counter-box mb-30 pb-40">
                                    <div class="h2-counter-box__icon mb-20">
                                        <i class="far fa-plus"></i>
                                    </div>
                                    <h5 class="semi-title mb-10">Satisfied Peoples</h5>
                                    <p class="mb-10">But I must explain to you how all
                                        mistaken idea denouncing ple</p>
                                    <h2>
                                        <span class="counter">
                                            {/* <Counter/> */}
                                            <CountUp
                                            end={485}
                                            duration={50}
                                            />
                                            </span></h2>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6">
                                <div class="h2-counter-box mb-30 pb-40">
                                    <div class="h2-counter-box__icon mb-20">
                                        <i class="far fa-plus"></i>
                                    </div>
                                    <h5 class="semi-title mb-10">Awards Winning</h5>
                                    <p class="mb-10">But I must explain to you how all
                                        mistaken idea denouncing ple</p>
                                    <h2><span class="counter">
                                       <CountUp
                                            end={986}
                                            duration={10}
                                            />
                                        </span></h2>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6">
                                <div class="h2-counter-box mb-30 pb-40">
                                    <div class="h2-counter-box__icon mb-20">
                                        <i class="far fa-plus"></i>
                                    </div>
                                    <h5 class="semi-title mb-10">Global Brands</h5>
                                    <p class="mb-10">But I must explain to you how all
                                        mistaken idea denouncing ple</p>
                                    <h2><span class="counter">
                                    <CountUp
                                            end={539}
                                            duration={50}
                                            />
                                        </span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-12 col-md-12">
                        <div class="row align-items-center chose mb-30">
                            <div class="col-md-6 col-12 ">
                                <div class="service__img__one mb-30 pos-rel text-right" data-tilt data-tilt-max="4">
                                    <img class="img-fluid" src="https://www.devsnews.com/template/spower/spower/assets/img/service/service1.jpg" alt=""/>
                                </div>
                            </div>
                            <div class="col-md-6 col-12">
                                <div class="service__img__two mb-30" data-tilt data-tilt-max="4">
                                    <img class="img-fluid" src="https://www.devsnews.com/template/spower/spower/assets/img/service/service2.jpg" alt=""/>
                                </div>
                            </div>
                            <div class="col-sm-12 d-none d-md-block">
                                <div class="service__img__three pos-rel text-center mb-30" data-tilt data-tilt-max="4">
                                    <img class="round-icon pos-abl d-none d-md-block" src=""
                                        alt=""/>
                                    <img class="img-fluid" src="https://www.devsnews.com/template/spower/spower/assets/img/service/service3.jpg" alt=""/>
                                </div>
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
 
export default Stats;