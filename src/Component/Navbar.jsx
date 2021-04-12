import React, { Component } from 'react';
import "../Component/Navbar.css"
import web from "../Component/Images/logo.png"
import {NavLink } from "react-router-dom"

// import About from './About/About';
// import AAbout from './AAbout/AAbout';
// import Client from './Client/Client';
// import Feature from './Feature/Feature';
// import Services from './Services/Services';
// import Portfolio from './Portfolio/Portfolio';
// import PPortfolio from "../Component/PPortfolio/PPortfolio";
// import Team from './Team/Team';
// import Contact from './Contact/Contact';
// import Footer from './Footer/Footer';
class Header extends Component {
    state = {  }
    render() { 
        return (
            <>
             <header role="banner">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/Home">
            {/* <img src="http://codehive.pk/hip/public/images/hiplogo.png" alt="logo"/> */}
            <h1 class="logo me-auto me-lg-0">
              <a href="/Home" style={{textDecoration:"none"}}>Silver Okas
             
              <span>.</span>
              <img src={web} alt=""
              className="img-fluid" style={{height:"30px"}}
              />
              </a></h1>
              

            {/* <h1>TSO</h1> */}
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto" style={{marginLeft:"auto"}}>
              <li className="nav-item active">
                <NavLink className="nav-link" to="/Home"   >
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/About">
                  About
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/Facilities">
                  Gallery
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/Cart">
                  Projects
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="Career">
                  Careers
                </NavLink>
              </li> */}
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/BusinessServices">
                  Business Services
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/Contact">
                  Contacts
                </NavLink>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
      </header>


            </>
          );
    }
}
 
export default Header;