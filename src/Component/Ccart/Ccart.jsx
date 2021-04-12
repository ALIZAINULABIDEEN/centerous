import React, { Component } from 'react';
import "../Shop/Shop.css"
class Ccart extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <section class="page-title-area" style={{backgroundImage: `url("https://www.devsnews.com/template/spower/spower/assets/img/bg/page-title-bg1.jpg")`}}>
            <div class="container">
                <div class="row">
                    <div class="shadow-text3 page-shadow">Shop</div>
                    <div class="col-xl-8 offset-xl-2">
                        <div class="page-title">
                            <h1 >Shop Details</h1>
                            <div class="breadcrumb-list">
                                <ul>
                                    <li><a href="/Home">Home</a></li>
                                    <li>Shop Detail</li>
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