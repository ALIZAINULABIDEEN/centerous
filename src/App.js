import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js//bootstrap.bundle";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Footer from './Component/Footer/Footer';
// import Shop from './Component/Shop/Shop';
import Cart from './Component/Cart';
// import Ccart from './Component/Ccart/Ccart';
// import Add from './Component/Add/Add';
import Phone from './Component/Phone';
// import About from './Component/About/About';
import Aboutcom from './Component/Aboutcom';
// import Long from './Component/Long/Long';
// import Detail from './Component/Detail/Detail';
import Add from './Component/Add/Add';
import Almaroof from './Component/Almaroof/Almaroof';
// import Silveroaks from './Component/Silveroaks/';
// import Silverok from './Component/Silverok/Silverok';
import Add3 from './Component/Add3/Add3';
// import Ccart2 from './Component/Ccart/Ccart2';
// import Ccart2 from './Component/Ccart2/Ccart2';
// import File from './Component/File/File';
// import Home from './Component/Home';



function App() {
  return (

   <Router>
     <Navbar/>
    <Switch> 

   
    <Route exact path="/Home" component={Home} />
    <Route exact path="/About" component={Aboutcom} />
    <Route exact path="/Cart" component={Cart} />
    <Route exact path="/centerous" component={Add} />
    <Route exact path="/Contact" component={Phone} />
    <Route exact path="/Almaroof" component={Almaroof} />
    <Route exact path="/Silveroaks" component={Add3} />
    {/* <Route exact path="/Almaroof" component={} /> */}
    {/* <Route exact path="/Detail" component={Long} /> */}
    {/* <Route exact path="/File" component={File} /> */}
    {/* <Route exact path="" render={(props)=>(<h1>BOG page</h1>)} /> */}
        </Switch>
     
    <Footer/>   
    </Router>

   
  );
}

export default App;
