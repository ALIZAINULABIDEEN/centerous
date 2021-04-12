import React, { Component } from 'react';
import "../Almaroof/Almaroof.css"
// import "../Shop/Shop.css"
class Almaroof extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <section class="page-title-area2" >
            <div class="container">
                <div class="row">
                    <div class="shadow-text3 page-shadow">Al Maroof</div>
                    <div class="col-xl-8 offset-xl-2">
                        <div class="page-title">
                            {/* <h1 >Maroof</h1> */}
                            <div class="breadcrumb-list">
                                <ul>
                                    {/* <li><a href="/Home">Home</a></li> */}
                                    {/* <li> Al Maroof</li> */}
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
 
export default Almaroof;