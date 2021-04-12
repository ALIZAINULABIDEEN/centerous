import React, { Component } from 'react';
import {AiOutlinePhone} from "react-icons/ai"
import {BiEnvelope} from "react-icons/bi"
import {GoLocation} from "react-icons/go"
import {BsFillPersonFill} from "react-icons/bs"
import "../Component/Shop/Shop.css"
import "../Head/Head.css"
class Head extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <section class="page-title-area" style={{backgroundImage: `url("https://www.devsnews.com/template/spower/spower/assets/img/bg/page-title-bg1.jpg")`}}>
            <div class="container">
                <div class="row">
                    <div class="shadow-text3 page-shadow">Contact</div>
                    <div class="col-xl-8 offset-xl-2">
                        <div class="page-title">
                            <h1 >Contact Us</h1>
                            <div class="breadcrumb-list">
                                <ul>
                                    <li><a href="/Home">Home</a></li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        
<section class="contact-area pos-rel">
            <div class="container">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div class="contact-box c-box mb-30">
                            <span class="shadow-icon"><i>
                               
                                </i></span>
                            <a class="mb-25" href="#"><i >
                            <AiOutlinePhone/>
                                </i></a>
                            <p class="mb-15">Phone Number</p>
                            <h5 class="semi-title">+012 (345) 6789</h5>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div class="contact-box theme-bg">
                            <span class="shadow-icon"><i class="fal fa-envelope"></i></span>
                            <a class="mb-25" href="#"><i >
                                <BiEnvelope/>
                                </i></a>
                            <p class="mb-15">Email Adress</p>
                            <h5 class="semi-title">infosp@gmail.com</h5>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="contact-box theme-bg2 mb-30">
                            <span class="shadow-icon"><i class="fal fa-map-marked-alt"></i></span>
                            <a class="mb-25" href="#"><i>
                                <GoLocation/>
                                </i></a>
                            <p class="mb-15">Office Adress</p>
                            <h5 class="semi-title">207 Main Road, USA</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            </>
         );
    }
}
 
export default Head;