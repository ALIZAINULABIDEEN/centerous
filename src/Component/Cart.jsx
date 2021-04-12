import React, { Component } from 'react';
import Category from './Category/Category';

import Shop from './Shop/Shop';
// import ShopingCart from './Shopping/Shopping';
class Cart extends Component {
    state = {  }
    render() { 
        return (
            <>
            <Shop/>
            <Category/>
            {/* <ShopingCart/> */}
            
            </>
          );
    }
}
 
export default Cart;