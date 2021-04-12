import React, { Component } from 'react';
import "../Footer/Footer.css"
import {FaFacebookF} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FcGoogle} from "react-icons/fc"
import {BsHouseFill} from "react-icons/bs"
import {BiEnvelope} from "react-icons/bi"
import {AiOutlinePhone} from "react-icons/ai"
// import {BiEnvelope} from "react-icons/bi"
class Footer extends Component {
    state = {  }
    render() { 
        return (  
            <>
            <footer class="footer-area pos-rel grey-bg pt-100">
        <div class="fot-shape pos-abl d-none d-lg-block">
            <img src="https://www.devsnews.com/template/spower/spower/assets/img/shape/fot-shape8.png" alt=""/>
        </div>
        <div class="fot-shape-two pos-abl">
            <img src="https://www.devsnews.com/template/spower/spower/assets/img/shape/fot-shape9.png" alt=""/>
        </div>
        <div class="container">
            <div class="row no-gutters mb-50">
                <div class="col-xl-4 col-lg-4">
                    <div class="logo-area theme-bg2 text-center pt-50 pb-50 mb-30">
                        <a href="index.html" class="logo"><img src="https://www.devsnews.com/template/spower/spower/assets/img/logo/foter-logo1.png" alt=""/></a>
                    </div>
                </div>
                <div class="col-xl-8 col-lg-8">
                    <div class="contact-map mb-30">
                        <div id="contact-map"></div>
                    </div>
                </div>
            </div>
            <div class="row footer-bottom-area fot-bottom-a2 pb-30 mb-30">
                <div class="col-xl-3 col-lg-6 col-md-6">
                    <div class="footer__widget widget2 mb-30 pr-30">
                        <h5 class="bottom-line pos-rel mb-30 pb-25">About Company</h5>
                        <p>
                        Silver Oaks is Pakistan's most valueable and admired real estate development companies.With proven competencies in properties, shopping malls & retail and hospitality & leisure,
                         silver oaks shapes new life style with a focous on design excellence, build quality and timely delivery.
                        </p>
                        <div class="header2__social foter__social mt-15">
                            <a href="#"><i>
                                <FaFacebookF/>
                                </i></a>
                            <a href="#">
                                <i >
                                    <FaTwitter/>
                                    </i></a>
                            <a href="#"><i>
                                <FaInstagram/>
                                </i></a>
                            <a href="#"><i ><FcGoogle/></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-6 col-md-6">
                    <div class="footer__widget widget2 mb-30">
                        <h5 class="bottom-line pos-rel mb-30 pb-25">Quick Links</h5>
                        <ul class="fot-list">
                            <li><a href="#"><i class="fas fa-chevron-double-right"></i> Latest Services</a></li>
                            <li><a href="#"><i class="fas fa-chevron-double-right"></i> Meet Team Member</a></li>
                            <li><a href="#"><i class="fas fa-chevron-double-right"></i> Latest News & Blog</a></li>
                            <li><a href="#"><i class="fas fa-chevron-double-right"></i> Company History</a></li>
                            <li><a href="#"><i class="fas fa-chevron-double-right"></i> Global Services</a></li>
                            <li><a href="#"><i class="fas fa-chevron-double-right"></i> Contact With Us</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-6 col-md-5">
                    <div class="footer__widget widget2  pl-15 mb-30">
                        <h5 class="bottom-line pos-rel mb-30 pb-25">Recent News</h5>
                        <p class="mb-20">Sutem vel eum iure reprehend
                            erit qui in evolupta velit</p>
                        <div class="addres-bar d-flex mb-10">
                            <div class="addres-bar__icon mr-15">
                                <i >
<BsHouseFill/>

                                </i>
                            </div>
                            <div class="addres-bar__content">
                                <span class="direction">
                                POTOHAR BUILDERS F-7 MARKAZ, ISLAMABAD.
                                </span>
                            </div>
                        </div>
                        <div class="addres-bar d-flex mb-10">
                            <div class="addres-bar__icon mr-15">
                                <i ><BiEnvelope/></i>
                            </div>
                            <div class="addres-bar__content">
                                <span class="direction">support@gmail.com</span>
                            </div>
                        </div>
                        <div class="addres-bar d-flex mb-10">
                            <div class="addres-bar__icon mr-15">
                                <i ><AiOutlinePhone/></i>
                            </div>
                            <div class="addres-bar__content">
                                <span class="direction">+92 321 5159979</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-7">
                    <div class="footer__widget widget2  mb-30 ml-35">
                        <h5 class="bottom-line pos-rel mb-30 pb-25">Follow Instagram</h5>
                        <a class="instagram" href="#">
                            <div class="instagram__thumb">
                                <img src="https://www.devsnews.com/template/spower/spower/assets/img/blog/blog6.jpg" alt=""/>
                            </div>
                            <span class="instagram__icon pos-abl"><i class="fab fa-instagram"></i></span>
                        </a>
                        <a class="instagram mr-10 ml-10 mb-10" href="#">
                            <div class="instagram__thumb">
                                <img src="https://www.devsnews.com/template/spower/spower/assets/img/blog/blog7.jpg" alt=""/>
                            </div>
                            <span class="instagram__icon pos-abl"><i class="fab fa-instagram"></i></span>
                        </a>
                        <a class="instagram" href="#">
                            <div class="instagram__thumb">
                                <img src="https://www.devsnews.com/template/spower/spower/assets/img/blog/blog8.jpg" alt=""/>
                            </div>
                            <span class="instagram__icon pos-abl"><i class="fab fa-instagram"></i></span>
                        </a>
                        <a class="instagram" href="#">
                            <div class="instagram__thumb">
                                <img src="https://www.devsnews.com/template/spower/spower/assets/img/blog/blog9.jpg" alt=""/>
                            </div>
                            <span class="instagram__icon pos-abl"><i class="fab fa-instagram"></i></span>
                        </a>
                        <a class="instagram mr-10 ml-10" href="#">
                            <div class="instagram__thumb">
                                <img src="https://www.devsnews.com/template/spower/spower/assets/img/blog/blog10.jpg" alt=""/>
                            </div>
                            <span class="instagram__icon pos-abl"><i class="fab fa-instagram"></i></span>
                        </a>
                        <a class="instagram" href="#">
                            <div class="instagram__thumb">
                                <img src="https://www.devsnews.com/template/spower/spower/assets/img/blog/blog11.jpg" alt=""/>
                            </div>
                            <span class="instagram__icon pos-abl"><i class="fab fa-instagram"></i></span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="row copy-right-area copy-area2 pos-rel">
               
                <a href="#top-menu" class="scroll-target"><i class="far fa-long-arrow-up"></i></a>
        
                <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="copyright copyright2 text-left mb-40">
                        <p  style={{textAlign:"end"}}>Copy@ 2020 <a href="http://sharkpink.com/" style={{color:"#ED2991"}}>SHARK PINK</a>, All Right Reserved</p>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="bottom-nav text-right mb-30">
                        {/* <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">News</a></li>
                            <li><a href="#">Product</a></li>
                        </ul> */}
                    </div>
                </div>
            </div>
        </div>
    </footer>
            </>
        );
    }
}
 
export default Footer;