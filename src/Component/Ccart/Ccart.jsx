import React, { Component } from 'react';
import "../Ccart/Ccart.css"
import "../Shop/Shop.css"
class Ccart extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <section class="page-title-area" >
            <div class="container">
                <div class="row">
                    <div class="shadow-text3 page-shadow">Centerous</div>
                    <div class="col-xl-8 offset-xl-2">
                        <div class="page-title">
                            {/* <h1 >Centerous Details</h1> */}
                            <div class="breadcrumb-list">
                                <ul>
                                    {/* <li><a href="/Home">Home</a></li> */}
                                    {/* <li>Centerous Detail</li> */}
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
 
export default Ccart;