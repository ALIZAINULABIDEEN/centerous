import React, { Component } from 'react';
import {IoIosArrowRoundForward} from "react-icons/io"

import web from "../Images/mar.jpg"
import sic from "../Images/cen.jpg"
import nic from "../Images/rod.jpg"
import ela from "../Images/elan.jpg"
import "../Promotion/Promotion.css"
class Promotion extends Component {
    state = {}
    render() {
        return (
            <>
                <section class="promotion-area grey-bg pos-rel pt-125 pb-100">
                    <div class="promotion-shape-one pos-abl d-none d-md-block"><img src="https://www.devsnews.com/template/spower/spower/assets/img/promotion-shape/shape3.png"
                        alt="" /></div>
                    <div class="promotion-shape-four pos-abl d-none d-lg-block"><img src="https://www.devsnews.com/template/spower/spower/assets/img/promotion-shape/shape4.png"
                        alt="" /></div>
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-3 col-lg-3 col-md-6">
                                <div class="section-title mb-30">
                                    <h6 class="mb-25">Communities</h6>
                                    <h2 class="mb-30">Our
                                Projects</h2>
                                    <a href="portfolio-details.html" class="theme_btn blog_btn blog_btn2">Explore More <i
                                     >
                                         <IoIosArrowRoundForward/>
                                         </i></a>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6">
                                {/* <div class="promotion promotion2 text-center pos-rel mb-30"
                            style={{backgroundImage: 'url("https://www.devsnews.com/template/spower/spower/assets/img/promotion-shape/promotion1.png")'}}>
                            <div class="promotion__thumb thumb2 mb-25">
                                <i class="flaticon-solar-panel-2"></i>
                            </div>
                            <div class="promotion__text text2">
                                <h6 class="mb-15">Non-Polluting</h6>
                                <p class="mb-15">Ratione volup sequi nesciunt Neque porro quisquam</p>
                                <a href="portfolio-details.html" class="more_btn">Read More <i class="far fa-long-arrow-right"></i></a>
                            </div>
                        </div> */}
                                <div class="promo mb-30">
                                    <img src={web} alt="Avatar" class="image" />
                                    <div class="overlay">
                                        <div class="text">Silver Oaks</div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-3 col-lg-3 col-md-6">
                                {/* <div class="promotion promotion2 text-center pos-rel mb-30"
                            style={{backgroundImage: 'url("https://www.devsnews.com/template/spower/spower/assets/img/promotion-shape/promotion1.png")'}}>
                            <div class="promotion__thumb thumb2 mb-25">
                                <i class="flaticon-solar-panel-1"></i>
                            </div>
                            <div class="promotion__text text2">
                                <h6 class="mb-15">Easy Installation</h6>
                                <p class="mb-15">Ratione volup sequi nesciunt Neque porro quisquam</p>
                                <a href="portfolio-details.html" class="more_btn">Read More <i class="far fa-long-arrow-right"></i></a>
                            </div>
                        </div> */}

                                <div class="promo">
                                    <img src={sic} alt="Avatar" class="image" />
                                    <div class="overlay">
                                        <div class="text">The Centaurus</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6">
                                {/* <div class="promotion promotion2 text-center pos-rel mb-30"
                            style={{backgroundImage: 'url("https://www.devsnews.com/template/spower/spower/assets/img/promotion-shape/promotion1.png")'}}>
                            <div class="promotion__thumb thumb2 mb-25">
                                <i class="flaticon-solar-panel"></i>
                            </div>
                            <div class="promotion__text text2">
                                <h6 class="mb-15">Renewable Energy</h6>
                                <p class="mb-15">Ratione volup sequi nesciunt Neque porro quisquam</p>
                                <a href="portfolio-details.html" class="more_btn">Read More <i class="far fa-long-arrow-right"></i></a>
                            </div>
                        </div> */}


                                <div class="promo">
                                    <img src="https://www.devsnews.com/template/spower/spower/assets/img/promotion-shape/promotion1.png" alt="Avatar" class="image" />
                                    <div class="overlay">
                                        <div class="text">Bizzon Plaza</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6">
                                {/* <div class="promotion promotion2 text-center pos-rel mb-30"
                             style={{backgroundImage: 'url("https://www.devsnews.com/template/spower/spower/assets/img/promotion-shape/promotion1.png")'}}>
                            <div class="promotion__thumb thumb2 mb-25">
                                <i class="flaticon-plug"></i>
                            </div>
                            <div class="promotion__text text2">
                                <h6 class="mb-15">Clean Energy</h6>
                                <p class="mb-15">Ratione volup sequi nesciunt Neque porro quisquam</p>
                                <a href="portfolio-details.html" class="more_btn">Read More <i class="far fa-long-arrow-right"></i></a>
                            </div>
                        </div> */}

                                <div class="promo">
                                    <img src={nic} alt="Avatar" class="image" />
                                    <div class="overlay">
                                        <div class="text">Rhodium Residencia</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6">
                                {/* <div class="promotion promotion2 text-center pos-rel mb-30"
                           style={{backgroundImage: 'url("https://www.devsnews.com/template/spower/spower/assets/img/promotion-shape/promotion1.png")'}}>
                            <div class="promotion__thumb thumb2 mb-25">
                                <i class="flaticon-gear"></i>
                            </div>
                            <div class="promotion__text text2">
                                <h6 class="mb-15">Solar Maintenance</h6>
                                <p class="mb-15">Ratione volup sequi nesciunt Neque porro quisquam</p>
                                <a href="portfolio-details.html" class="more_btn">Read More <i class="far fa-long-arrow-right"></i></a>
                            </div>
                        </div> */}

                                <div class="promo">
                                    <img src={ela} alt="Avatar" class="image" />
                                    <div class="overlay">
                                        <div class="text">Elaan Square</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6">
                                {/* <div class="promotion promotion2 text-center pos-rel mb-30"
                          style={{backgroundImage: 'url("https://www.devsnews.com/template/spower/spower/assets/img/promotion-shape/promotion1.png")'}} >
                            <div class="promotion__thumb thumb2 mb-25">
                                <i class="flaticon-wind-turbine"></i>
                            </div>
                            <div class="promotion__text text2">
                                <h6 class="mb-15">Easy Installation</h6>
                                <p class="mb-15">Ratione volup sequi nesciunt Neque porro quisquam</p>
                                <a href="portfolio-details.html" class="more_btn">Read More <i class="far fa-long-arrow-right"></i></a>
                            </div>
                        </div> */}

                                <div class="promo">
                                    <img src={nic} alt="Avatar" class="image" />
                                    <div class="overlay">
                                        <div class="text">City Stay</div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-3 col-lg-3 col-md-6">
                                {/* <div class="promotion promotion2 text-center pos-rel mb-30"
                          style={{backgroundImage: 'url("https://www.devsnews.com/template/spower/spower/assets/img/promotion-shape/promotion1.png")'}} >
                            <div class="promotion__thumb thumb2 mb-25">
                                <i class="flaticon-wind-turbine"></i>
                            </div>
                            <div class="promotion__text text2">
                                <h6 class="mb-15">Easy Installation</h6>
                                <p class="mb-15">Ratione volup sequi nesciunt Neque porro quisquam</p>
                                <a href="portfolio-details.html" class="more_btn">Read More <i class="far fa-long-arrow-right"></i></a>
                            </div>
                        </div> */}

                                <div class="promo">
                                    <img src="https://www.devsnews.com/template/spower/spower/assets/img/promotion-shape/promotion1.png" alt="Avatar" class="image" />
                                    <div class="overlay">
                                        <div class="text">Silver Sands</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6">
                                <div class="promotion02 text-center pos-rel">
                                    <div class="promotion02__img">
                                        <img class="promotion02-img" src="" alt="" />
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

export default Promotion;