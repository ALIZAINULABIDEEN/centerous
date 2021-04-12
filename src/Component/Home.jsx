import React, { Component } from 'react';
// import Cash from '../Cash/Cash';
// import Cahtml from './Cahtml';
// import Cards from './Cards/Cards';
import Carosel from './Carosel/Carosel';
import Chose from './Chose/Chose';
import History from './History/History';
import Promotion from './Promotion/Promotion';
import Stats from './Stats/Stats';
import Team from './Team/Team';
// import Work from './Work/Work';
// import Testimonial from './Testimonial/Testimonial';
class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <Carosel/>
            <History/>
            <Chose/>
            <Promotion/>
            <Stats/>       
            <Team/>
            </>
         );
    }
}
 
export default Home;