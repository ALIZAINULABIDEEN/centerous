import React, { Component } from 'react';
import "../Category/Category.css"
import { AiFillStar } from "react-icons/ai"
import { AiOutlineSearch } from "react-icons/ai"
import web from "../Images/cen.jpg"
import pic from "../Images/mar.jpg"
import nic from "../Images/new.jpg"
import mic from "../Images/rod.jpg"
import lic from "../Images/elan.jpg"
import qic from "../Images/rhod.png"
class Category extends Component {
    state = {
    flag:false,
    flag1:false,
    flag2:false
    
    }
    
    render() {

        return (
            <>
                <section class="shop-area pt-130 pb-130">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-3 col-lg-3 col-md-12">
                                <div class="shop-catagory-area">
                                    {/* <div class="catagory-search mb-40">
                                        <input class="form-control" type="text" placeholder="Search Keywords" />
                                        <span><i><AiOutlineSearch /></i></span>
                                    </div> */}
                                    {/* <div class="shop-widget mb-40">
                                        <h6 class="shop-title pb-20 mb-25">Category</h6>
                                        <div class="cat-list-desc">
                                            <ul class="cat-list">
                                                <li><a href="">Accessories</a></li>
                                                <li><a href="#">Clothing</a></li>
                                                <li><a href="#">Decor</a></li>
                                                <li><a href="#">Hoodies</a></li>
                                                <li><a href="#">Music</a></li>
                                                <li><a href="#">Tshirts</a></li>
                                                <li><a href="#">Uncategorized</a></li>
                                            </ul>
                                        </div>
                                    </div> */}
                                    {/* <div class="shop-widget mb-40">
                                        <h6 class="shop-title pb-20 mb-25">Populer Tag</h6>
                                        <div class="tag-list2">
                                            <a class="tag-btn" href="#product-price">Cleaning</a>
                                            <a class="tag-btn" href="#">Business</a>
                                            <a class="tag-btn" href="#">Car</a>
                                            <a class="tag-btn" href="#">House</a>
                                            <a class="tag-btn" href="#">Washing</a>
                                            <a class="tag-btn" href="#">Agency</a>
                                        </div>
                                    </div> */}
                                    {/* <div class="shop-widget mb-40">
                                <h6 class="shop-title pb-20 mb-25">Filer By Price</h6>
                                <div class="progress mb-30">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                        <span class="empty-box"></span>
                                    </div>
                                  </div>
                                <div class="shop-widget-price">
                                    <p class="price-meter"><span>Price :</span> $29 - $300</p>
                                </div>
                            </div> */}
                                </div>
                            </div>
                            <div>
                                <div class="product-list">
                                    <div class="row">
                                        <div >
                                            {/* <div class="pro-filter f-right mb-50">
                                        <select class="shop-fileter" name="filter" id="pro-filter">
                                            <option value="Short by">Short by</option>
                                            <option value="New Products">New Products</option>
                                            <option value="Top Sales">Top Sales</option>
                                            <option value="A to Z Produtcs">A to Z Produtcs</option>
                                        </select>
                                    </div> */}
                                        </div>
                                        <div class="col-xl-3 col-lg-3 col-md-3">
                                            <div class="product text-center mb-50">
                                                <div class="product__img grey-bg mb-30">
                                                    <a href="/centerous">
                                                        <img src={web} alt="" />
                                                        </a>
                                                </div>
                                                <div class="product__text">
                                                    <div class="product__text--icon">
                                                        <a href="#">
                                                            <i>
                                                                <AiFillStar />
                                                            </i>
                                                        </a>
                                                        <a href="#">
                                                            <i>
                                                                <AiFillStar />
                                                            </i>
                                                        </a>
                                                        <a href="#">
                                                            <i>
                                                                <AiFillStar />
                                                            </i>
                                                        </a>
                                                        <a href="#">
                                                            <i>
                                                                <AiFillStar />
                                                            </i>
                                                        </a>
                                                        <a href="#">
                                                            <i>
                                                                <AiFillStar />
                                                            </i>
                                                        </a>
                                                    </div>
                                                    <h6><a href="product-details.html">The Centaurus</a></h6>
                                                    {/* <span class="product-price">$25.59</span> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-3 col-md-3">
                                            <div class="product text-center mb-50">
                                                <div class="product__img grey-bg mb-30">
                                                    <a href="/Almaroof"><img className="img-fluid" src={pic} alt="" /></a>
                                                </div>
                                                <div class="product__text">
                                                    <div class="product__text--icon">
                                                        <a href="#">
                                                            <i>
                                                                <AiFillStar />
                                                            </i>
                                                        </a>
                                                        <a href="#">
                                                            <i>
                                                                <AiFillStar />
                                                            </i>
                                                        </a>
                                                        <a href="#">
                                                            <i>
                                                                <AiFillStar />
                                                            </i>
                                                        </a>
                                                        <a href="#">
                                                            <i>
                                                                <AiFillStar />
                                                            </i>
                                                        </a>
                                                        <a href="#">
                                                            <i>
                                                                <AiFillStar />
                                                            </i>
                                                        </a>
                                                    </div>
                                                    <h6><a href="product-details.html">Al Maroof International Hospital</a></h6>
                                                    {/* <span class="product-price">$25.59</span> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-3 col-md-3">
                                            <div class="product text-center mb-50">
                                                <div class="product__img grey-bg mb-30">
                                                    <a href="/Silveroaks"><img
                                                    style={{height:"315px"}}
                                                    className="img-fluid" src={nic}alt="" /></a>
                                                </div>
                                                <div class="product__text">
                                                    <div class="product__text--icon">
                                                        <a href="#">
                                                            <i>
                                                                <AiFillStar />
                                                            </i>
                                                        </a>
                                                        <a href="#">
                                                            <i>
                                                                <AiFillStar />
                                                            </i>
                                                        </a>
                                                        <a href="#">
                                                            <i>
                                                                <AiFillStar />
                                                            </i>
                                                        </a>
                                                        <a href="#">
                                                            <i>
                                                                <AiFillStar />
                                                            </i>
                                                        </a>
                                                        <a href="#">
                                                            <i>
                                                                <AiFillStar />
                                                            </i>
                                                        </a>
                                                    </div>
                                                    <h6><a href="product-details.html">Silver Oaks</a></h6>
                                                    {/* <span class="product-price">$25.59</span> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-3 col-md-3">
                                            <div class="product text-center mb-50">
                                                <div class="product__img grey-bg mb-30">
                                                    <a href="product-details.html"><img src={mic} alt="" /></a>
                                                </div>
                                                <div class="product__text">
                                                    <div class="product__text--icon">
                                                        <a href="#">
                                                            <i>
                                                                <AiFillStar />
                                                            </i>
                                                        </a>
                                                        <a href="#">
                                                            <i>
                                                                <AiFillStar />
                                                            </i>
                                                        </a>
                                                        <a href="#">
                                                            <i>
                                                                <AiFillStar />
                                                            </i>
                                                        </a>
                                                        <a href="#">
                                                            <i>
                                                                <AiFillStar />
                                                            </i>
                                                        </a>
                                                        <a href="#">
                                                            <i>
                                                                <AiFillStar />
                                                            </i>
                                                        </a>
                                                    </div>
                                                    <h6><a href="product-details.html">Rhodium Residencia</a></h6>
                                                    {/* <span class="product-price">$25.59</span> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-3 col-md-3">
                                            <div class="product text-center mb-50">
                                                <div class="product__img grey-bg mb-30">
                                                    <a href="product-details.html"><img src={lic} alt="" /></a>
                                                </div>
                                                <div class="product__text">
                                                    <div class="product__text--icon">
                                                        <a href="#">
                                                            <i>
                                                                <AiFillStar />
                                                            </i>
                                                        </a>
                                                        <a href="#">
                                                            <i>
                                                                <AiFillStar />
                                                            </i>
                                                        </a>
                                                        <a href="#">
                                                            <i>
                                                                <AiFillStar />
                                                            </i>
                                                        </a>
                                                        <a href="#">
                                                            <i>
                                                                <AiFillStar />
                                                            </i>
                                                        </a>
                                                        <a href="#">
                                                            <i>
                                                                <AiFillStar />
                                                            </i>
                                                        </a>
                                                    </div>
                                                    <h6><a href="product-details.html">Elaan Square</a></h6>
                                                    {/* <span class="product-price">$25.59</span> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-3 col-md-3">
                                            <div class="product text-center mb-50">
                                                <div class="product__img grey-bg mb-30">
                                                    <a href="product-details.html"><img className="img-fluid" src={qic} alt="" /></a>
                                                </div>
                                                <div class="product__text">
                                                    <div class="product__text--icon">
                                                        <a href="#">
                                                            <i>
                                                                <AiFillStar />
                                                            </i>
                                                        </a>
                                                        <a href="#">
                                                            <i>
                                                                <AiFillStar />
                                                            </i>
                                                        </a>
                                                        <a href="#">
                                                            <i>
                                                                <AiFillStar />
                                                            </i>
                                                        </a>
                                                        <a href="#">
                                                            <i>
                                                                <AiFillStar />
                                                            </i>
                                                        </a>
                                                        <a href="#">
                                                            <i>
                                                                <AiFillStar />
                                                            </i>
                                                        </a>
                                                    </div>
                                                    <h6><a href="product-details.html">City Stay</a></h6>
                                                    {/* <span class="product-price">$25.59</span> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-3 col-md-3">
                                            <div class="product text-center mb-50">
                                                <div class="product__img grey-bg mb-30">
                                                    <a href="product-details.html"><img src="https://www.devsnews.com/template/spower/spower/assets/img/product/product1.png" alt="" /></a>
                                                </div>
                                                <div class="product__text">
                                                    <div class="product__text--icon">
                                                        <a href="#">
                                                            <i>
                                                                <AiFillStar />
                                                            </i>
                                                        </a>
                                                        <a href="#">
                                                            <i>
                                                                <AiFillStar />
                                                            </i>
                                                        </a>
                                                        <a href="#">
                                                            <i>
                                                                <AiFillStar />
                                                            </i>
                                                        </a>
                                                        <a href="#">
                                                            <i>
                                                                <AiFillStar />
                                                            </i>
                                                        </a>
                                                        <a href="#">
                                                            <i>
                                                                <AiFillStar />
                                                            </i>
                                                        </a>
                                                    </div>
                                                    <h6><a href="product-details.html">Silver Sand</a></h6>
                                                    {/* <span class="product-price">$25.59</span> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-3 col-md-3">
                                            <div class="product text-center mb-50">
                                                <div class="product__img grey-bg mb-30">
                                                    <a href="product-details.html"><img src="https://www.devsnews.com/template/spower/spower/assets/img/product/product1.png" alt="" /></a>
                                                </div>
                                                <div class="product__text">
                                                    <div class="product__text--icon">
                                                        <a href="#">
                                                            <i>
                                                                <AiFillStar />
                                                            </i>
                                                        </a>
                                                        <a href="#">
                                                            <i>
                                                                <AiFillStar />
                                                            </i>
                                                        </a>
                                                        <a href="#">
                                                            <i>
                                                                <AiFillStar />
                                                            </i>
                                                        </a>
                                                        <a href="#">
                                                            <i>
                                                                <AiFillStar />
                                                            </i>
                                                        </a>
                                                        <a href="#">
                                                            <i>
                                                                <AiFillStar />
                                                            </i>
                                                        </a>
                                                    </div>
                                                    <h6><a href="product-details.html">Bizzon Plaza</a></h6>
                                                    {/* <span class="product-price">$25.59</span> */}
                                                </div>
                                            </div>
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

export default Category;