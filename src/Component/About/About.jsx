import React, { Component } from 'react';
import "../About/About.css"
import {AiFillPieChart} from 'react-icons/ai';
import {IoMdMail} from 'react-icons/io';
import { TiLocation } from 'react-icons/ti';
// import Chart from './Chart';
class About extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <section class="about-company-area pos-rel pb-100 pt-125">
            <div class="round-shape1 pos-abl d-none d-md-block"><img src="https://www.devsnews.com/template/spower/spower/assets/img/shape/round01.png" className="App-logo" alt=""/>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-12">
                        <div class="row">
                            <div class="col-sm-6 col-12">
                                <div class="chose__img__three" data-tilt data-tilt-max="4">
                                    <img class="img-fluid" src="https://www.devsnews.com/template/spower/spower/assets/img/chose/chose3.jpg" alt=""/>
                                </div>
                            </div>
                            <div class="col-sm-6 col-12">
                                <div class="chose__img__four mt-70 mb-30" data-tilt data-tilt-max="4">
                                    <img class="img-fluid" src="https://www.devsnews.com/template/spower/spower/assets/img/chose/chose4.jpg" alt=""/>
                                </div>
                            </div>
                            <div class="col-sm-6 col-12">
                                <div class="experience-box mb-30">
                                    <div class="experience-inner theme-bg2">
                                        <h1 class="ex-title counter">40</h1>
                                        <h3>Years Of Experience</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-12">
                                <div class="col-12">
                                    <div class="chose__img__five mb-30" data-tilt data-tilt-max="4">
                                        <img class="img-fluid" src="https://www.devsnews.com/template/spower/spower/assets/img/chose/chose5.jpg" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-12">
                        <div class="about-wrapper pl-80">
                            <div class="section-title text-left mb-35">
                                <h6 class="mb-25">About Company</h6>
                                <h2 class="mb-35">We Have 40 Years Of
                                    Experience Agency</h2>
                                <p class="about-line">
                                Pakistan's premier provider of enriching, personal and memorable lifestyle experiences.
                                </p>
                            </div>
                            <nav>
                                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                  {/* <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Our Mission</a> */}
                                  {/* <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Company History</a> */}
                                  {/* <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Our Goals</a> */}
                                </div>
                              </nav>
                              {/* <div class="tab-content" id="nav-tabContent"> */}
                                    {/* <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"> */}
                                        <div class="about d-sm-flex">
                                            <div class="about__img mr-30">
                                                <img src="https://www.devsnews.com/template/spower/spower/assets/img/about/about2.jpg" alt=""/>
                                            </div>
                                            <div class="about__text">
                                                <p class="mb-15">
                                                SILVER OAKS has entered the most exciting phase in the young history of Islamabad. In 2020, when the Government of Pakistan has given relief for construction industry the uprooting of over 300 vertical projects is a testament to the new life at Islamabad.
Over the past 30 years, SILVER OAKS has redefined the dynamics of property development, which now serves as a template for others across Pakistan. We have always believed in the vision of our founder Chaudhry Naseer Ahmed, Chairman Silver Oaks group, who reminds us that to reach new horizons we have to go beyond our personal boundaries.
Our driving force, undoubtedly, has been the trust our shareholders have placed in us. They stood by us as we shaped the city’s skyline, built the world’s largest mall, created world-class hotels, and expanded to international markets.
Our shareholders have given us the opportunity to partner in our city’s amazing transformation into a global hub. They built Islamabad as an extraordinary city in one of the best nations in the world, and they made us what we are today – one of the Pakistan’s most valuable and most admired companies.
Today, across the world, business development models are being reshaped and economic and innovation cycles are shrinking. Companies that do not respond to these changes risk being exposed to irrevocable risks that affect their long-term prospects.
We see the transformation around us as promising opportunities to create a new Emaar. We are drawing on the potential offered by Islamabad as one of the worlds’ leading business, leisure and fashion hubs, and the opportunities in rapidly-growing international markets. We are implementing our strategy to make our high-growth businesses independent profit centers and will continue to build smart cities of the future.
                                                </p>
                                                <div class="about__text--child d-sm-flex align-items-center">
                                                    <div class="child-icon">
                                                        <i>
                                                            <AiFillPieChart/>
                                                        </i>
                                                    </div>
                                                    <p>
We are sharpening our strategy to be one of the world’s most valuable, most innovative and most admired companies. Our goal is to be an unstoppable company that creates enormous value for our shareholders, stakeholders, and the economy

                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    <div class="about d-sm-flex">
                                        <div class="about__img mr-30">
                                            <img src="https://www.devsnews.com/template/spower/spower/assets/img/about/about2.jpg" alt=""/>
                                        </div>
                                        <div class="about__text">
                                            <p class="mb-15">But must explain to you how all this mistaken
                                                idea of denouncing pleasure and praising pain was born and will give you complete</p>
                                            <div class="about__text--child d-sm-flex align-items-center">
                                                <div class="child-icon">
                                                    <i class="fal fa-chart-pie-alt"></i>
                                                </div>
                                                <p>Denouncing pleasure and praising pain 
                                                    was born and will give complete</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                    <div class="about d-sm-flex">
                                        <div class="about__img mr-30">
                                            <img src="assets/img/about/about2.jpg" alt=""/>
                                        </div>
                                        <div class="about__text">
                                            <p class="mb-15">But must explain to you how all this mistaken
                                                idea of denouncing pleasure and praising pain was born and will give you complete</p>
                                            <div class="about__text--child d-sm-flex align-items-center">
                                                <div class="child-icon">
                                                    <i class="fal fa-chart-pie-alt"></i>
                                                </div>
                                                <p>Denouncing pleasure and praising pain 
                                                    was born and will give complete</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                              {/* </div> */}
                        {/* </div> */}
                    </div>
                </div>
            </div>

            
            <div class="team-area section-padding30">
<div class="container">
<div class="row">
<div class="cl-xl-7 col-lg-8 col-md-10">

<div class="section-tittles mb-70">
<span>Our Professional members </span>
<h2>Our Team Mambers</h2>
</div>
</div>
</div>
<div class="row">

<div class="col-xl-4 col-lg-4 col-md-6 col-sm-">
<div class="single-team mb-30">
<div class="team-img">
  <img src="https://preview.colorlib.com/theme/news/assets/img/gallery/team2.png" alt=""/>
{/* <img data-cfsrc="assets/img/gallery/team2.png" alt="" style={{display:"none", visibility:"hidden"}}/><noscript><img src="assets/img/gallery/team2.png" alt=""/></noscript> */}
</div>
<div class="team-caption">
<h3><a href="#">Ethan Welch</a></h3>
<span>UX Designer</span>
</div>
</div>
</div>
<div class="col-xl-2 col-lg-2col-md-6 col-sm-">
{/* <div class="single-team mb-30">
<div class="team-img">
  <img src="https://preview.colorlib.com/theme/news/assets/img/gallery/team3.png" alt=""/>
</div>
<div class="team-caption">
<h3><a href="#">Ethan Welch</a></h3>
<span>UX Designer</span>
</div>
</div> */}
</div>
<div class="col-xl-4 col-lg-4 col-md-6 col-sm-">
<div class="single-team mb-30">
<div class="team-img">
  <img src="https://preview.colorlib.com/theme/news/assets/img/gallery/team1.png" alt=""/>
{/* <img data-cfsrc="assets/img/gallery/team1.png" alt="" style={{display:"none", visibility:"hidden"}}/><noscript><img src="assets/img/gallery/team1.png" alt=""/></noscript> */}
</div>
<div class="team-caption">
<h3><a href="#">Ethan Welch</a></h3>
<span>UX Designer</span>
</div>
</div>
</div>
</div>
</div>
</div>

        </section>
        <section>
 
        </section>


        
            </>
         );
    }
}
 
export default About;