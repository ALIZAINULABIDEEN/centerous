import React, { Component } from 'react';
// import "../Shop/Shop.css"
import "../Silverok/Silverok.css"
class Silverok extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <section class="page-title-area3" >
            <div class="container">
                <div class="row">
                    <div class="shadow-text3 page-shadow">Silver Oaks</div>
                    <div class="col-xl-8 offset-xl-2">
                        <div class="page-title">
                            {/* <h1 >Our Projects</h1> */}
                            <div class="breadcrumb-list">
                                <ul>
                                    {/* <li><a href="/Home">Home</a></li> */}
                                    {/* <li>SilverOaks</li> */}
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
 
export default Silverok;