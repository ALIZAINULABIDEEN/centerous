import React, { Component } from 'react';
import "../Detail/Detail.css"
class Detail extends Component {
    state = {  }
    render() { 
        return (  
            <>
            <section class="product-dertails-area pt-130 pb-115">
            <div class="container">
                <div class="row">
                    <div class="col-xl-8 col-lg-12 col-md-12">
                        <div class="shop-thumb-tab mb-30">
                            <ul class="nav" id="myTab2" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                                        aria-selected="true"><img src="https://www.devsnews.com/template/spower/spower/assets/img/product/details/thumb1.jpg" alt=""/>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab"
                                        aria-selected="false"><img src="https://www.devsnews.com/template/spower/spower/assets/img/product/details/thumb2.jpg"
                                            alt=""/></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="profile-tab2" data-toggle="tab" href="#profile1" role="tab"
                                        aria-selected="false"><img src="https://www.devsnews.com/template/spower/spower/assets/img/product/details/thumb3.jpg"
                                            alt=""/></a>
                                </li>
                            </ul>
                        </div>
                        <div class="product-details-img mb-30">
                            <div class="tab-content" id="myTabContent2">
                                <div class="tab-pane fade show active" id="home" role="tabpanel">
                                    <div class="product-large-img">
                                        <img src="https://www.devsnews.com/template/spower/spower/assets/img/product/details/thumb4.jpg" alt=""/>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="profile" role="tabpanel">
                                    <div class="product-large-img">
                                        <img src="https://www.devsnews.com/template/spower/spower/assets/img/product/details/thumb5.jpg" alt=""/>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="profile1" role="tabpanel">
                                    <div class="product-large-img">
                                        <img src="https://www.devsnews.com/template/spower/spower/assets/img/product/details/thumb6.jpg" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-12 col-md-12">
                        <div class="product-details ml-50">
                            <div class="product-title">
                                <h3>Solar Panel W45</h3>
                                <div class="product__text--icon mb-10">
                                    <a href="#"><i class="fas fa-star"></i></a>
                                    <a href="#"><i class="fas fa-star"></i></a>
                                    <a href="#"><i class="fas fa-star"></i></a>
                                    <a href="#"><i class="fas fa-star"></i></a>
                                    <a href="#"><i class="fas fa-star"></i></a>
                                </div>
                                <span class="new-price mb-30">$89.00</span>
                                <p class="mb-15">Sed ut perspiciatis unde omnis iste natus
                                    error sit voluptatem accusantium dolorem
                                    que laudantium, totam rem aperiaaquipsa quae ab illo inventore veritatis
                                </p>
                                <p class="mb-35">Perspiciatis unde omnis iste sit voluptatem accusantium dolorem que
                                    laudantium, totam
                                    rem aperiaaquipsa quae ab illo</p>
                            </div>
                            <div class="product-details-action mb-40">
                                <form action="">
                                    <div class="plus-minus">
                                        <div class="cart-plus-minus mr-30">
                                            {/* <input type="text" value="1" id="number"/> */}

                                     <input type="number" id="quantity" name="quantity"  
                                     
                                     />

                                            {/* <div class="dec qtybutton">-</div>
                                            <div class="inc qtybutton">+</div> */}
                                        </div>


                                        <button class="cart_btn" type="submit">Add To Cart</button>
                                    </div>
                                </form>
                            </div>
                            <div class="product-social">
                                <span class="share mr-20">Share Now</span>
                                <a href="#">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="#">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="#">
                                    <i class="fab fa-google-plus-g"></i>
                                </a>
                                <a href="#">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-11 col-lg-12 col-md-12">
                        <div class="product-details-tab-02 mt-25">
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#description" role="tab"
                                        aria-controls="home" aria-selected="true">Description </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#information" role="tab"
                                        aria-controls="profile" aria-selected="false">Additional information </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#reviews" role="tab"
                                        aria-controls="contact" aria-selected="false">Reviews (1)</a>
                                </li>
                            </ul>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="home-tab">
                                    <p class="mb-25">
                                        Sorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur xcepteur sint occaecat cupidatat non proident, sunt.
                                    </p>
                                    <p>
                                        Sorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur xcepteur sint occaecat cupidatat non proident, sunt.
                                    </p>
                                </div>
                                <div class="tab-pane fade" id="information" role="tabpanel" aria-labelledby="profile-tab">
                                    <p class="mb-25">
                                        Sorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur xcepteur sint occaecat cupidatat non proident, sunt.
                                    </p>
                                    <p>
                                        Sorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur xcepteur sint occaecat cupidatat non proident, sunt.
                                    </p>
                                </div>
                                <div class="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="contact-tab">
                                    <p class="mb-25">
                                        Sorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur xcepteur sint occaecat cupidatat non proident, sunt.
                                    </p>
                                    <p>
                                        Sorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur xcepteur sint occaecat cupidatat non proident, sunt.
                                    </p>
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
 
export default Detail;