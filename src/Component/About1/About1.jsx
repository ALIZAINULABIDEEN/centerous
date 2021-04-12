import React, { Component } from 'react';
import "../Shop/Shop.css"
class About1 extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <section class="page-title-area" style={{backgroundImage: `url("http://codehive.pk/hip/public/images/bg-image-1.jpg")`}}>
            <div class="container">
                <div class="row">
                    <div class="shadow-text3 page-shadow">About</div>
                    <div class="col-xl-8 offset-xl-2">
                        <div class="page-title">
                            <h1 >About Us</h1>
                            <div class="breadcrumb-list">
                                <ul>
                                    <li><a href="/Home">Home</a></li>
                                    <li>About</li>
                                </ul>
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
 
export default About1;