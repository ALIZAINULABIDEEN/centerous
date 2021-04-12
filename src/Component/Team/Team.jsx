import React, { Component } from 'react';
import {FaFacebookF} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaGoogle} from "react-icons/fa"

import "../Team/Team.css"
class Team extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <section class="team-area grey-bg pt-125 pb-100">
            <div class="team-shape-one pos-abl">
                {/* <img src="https://www.devsnews.com/template/spower/spower/assets/img/icon/icon8.png"  alt=""/> */}
                </div>
            <div class="team-shape-two pos-abl">
                <img class="img-fluid" src="https://www.devsnews.com/template/spower/spower/assets/img/shape/team-shape7.png"  alt=""/>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 offset-xl-3">
                        <div class="section-title text-center mb-80 mr-40 ml-40">
                            <h6 class="mb-25">Meet Our Team</h6>
                                <h2>Meet Our Exclusive
                                    Team Members</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-3 col-lg-3 col-md-6">
                        <div class="team text-center mb-30">
                            <div class="team__thumb team__thumb1 mb-30">
                                <img src="https://www.devsnews.com/template/spower/spower/assets/img/team/team1.png" alt=""/>
                            </div>
                            <div class="team__content white-bg pt-120 pb-40">
                                <h5><a href="team-details.html">CHAUDHRY NASEER AHMAD </a></h5>
                                <span>CHAIRMAN SILVER OAKS. </span>
                                <div class="team--social mt-15">
                                    <a href="#">
                                        <i>
                                            <FaFacebookF
                                            style={{color:"grey"}}
                                            />
                                            </i>
                                            </a>
                                    <a href="#">
                                        <i>
                                            <FaInstagram
                                              style={{color:"grey"}}
                                            />
                                            </i></a>
                                    <a href="#"><i><FaTwitter
                                      style={{color:"grey"}}
                                    /></i></a>
                                    <a href="#"><i><FaGoogle
                                      style={{color:"grey"}}
                                    /></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-6">
                        <div class="team text-center mb-30">
                            <div class="team__thumb team__thumb1 mb-30">
                                <img src="https://www.devsnews.com/template/spower/spower/assets/img/team/team2.png" alt=""/>
                            </div>
                            <div class="team__content white-bg pt-120 pb-40">
                                <h5><a href="team-details.html">AMIR AMIL </a></h5>
                                <span>Cheif Executive Officer </span>
                                <div class="team--social mt-15">
                                <a href="#">
                                        <i>
                                            <FaFacebookF
                                            style={{color:"grey"}}
                                            />
                                            </i>
                                            </a>
                                    <a href="#">
                                        <i>
                                            <FaInstagram
                                              style={{color:"grey"}}
                                            />
                                            </i></a>
                                    <a href="#"><i><FaTwitter
                                      style={{color:"grey"}}
                                    /></i></a>
                                    <a href="#"><i><FaGoogle
                                      style={{color:"grey"}}
                                    /></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-6">
                        <div class="team text-center mb-30">
                            <div class="team__thumb team__thumb1 mb-30">
                                <img src="https://www.devsnews.com/template/spower/spower/assets/img/team/team3.png" alt=""/>
                            </div>
                            <div class="team__content white-bg pt-120 pb-40">
                                <h5><a href="team-details.html">Michael J. Skipper</a></h5>
                                <span>CEO & Founder</span>
                                <div class="team--social mt-15">
                                <a href="#">
                                        <i>
                                            <FaFacebookF
                                            style={{color:"grey"}}
                                            />
                                            </i>
                                            </a>
                                    <a href="#">
                                        <i>
                                            <FaInstagram
                                              style={{color:"grey"}}
                                            />
                                            </i></a>
                                    <a href="#"><i><FaTwitter
                                      style={{color:"grey"}}
                                    /></i></a>
                                    <a href="#"><i><FaGoogle
                                      style={{color:"grey"}}
                                    /></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-6">
                        <div class="team text-center mb-30">
                            <div class="team__thumb team__thumb1 mb-30">
                                <img src="https://www.devsnews.com/template/spower/spower/assets/img/team/team4.png" alt=""/>
                            </div>
                            <div class="team__content white-bg pt-120 pb-40">
                                <h5><a href="#">Frank C. Beltz</a></h5>
                                <span>Solar Engineer</span>
                                <div class="team--social mt-15">
                                <a href="#">
                                        <i>
                                            <FaFacebookF
                                            style={{color:"grey"}}
                                            />
                                            </i>
                                            </a>
                                    <a href="#">
                                        <i>
                                            <FaInstagram
                                              style={{color:"grey"}}
                                            />
                                            </i></a>
                                    <a href="#"><i><FaTwitter
                                      style={{color:"grey"}}
                                    /></i></a>
                                    <a href="#"><i><FaGoogle
                                      style={{color:"grey"}}
                                    /></i></a>
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
 
export default Team;