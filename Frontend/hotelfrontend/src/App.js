import React from "react";
import { BrowserRouter, Switch, Route, Link} from "react-router-dom";

import Navbar from './components/Navbar';
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Admindashboard from "./components/Admindashboard";
import Booking from "./components/Booking";
import Users from "./components/Users";
import HotelRegister from "./components/HotelRegister";
import Profile from "./components/Profile";
import HotelDashboard from "./components/HotelDashboard";
import HotelBooking from "./components/HotelBooking";
import HotelInformation from "./components/HotelInformation";
import HotelPackage from "./components/HotelPackage";
import Hotelprofile from "./components/Hotelprofile";
import Gallery from "./components/Gallery";
import RoomType from "./components/RoomType";
import Roomtypeform from "./components/Roomtypeform";
import CustomerDashboard from "./components/CustomerDashboard";
import backgroundimages from "./image/bg-agoda-homepage.png";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar/>
    <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/Signup" exact component={Signup}></Route>
          <Route path="/Signin" exact component={Signin}></Route>

          {/* Admin Dashboard */}
          <Route path="/Admindashboard" exact component={Admindashboard}></Route>
          <Route path="/Booking" exact component={Booking}></Route>
          <Route path="/Users" exact component={Users}></Route>
          <Route path="/Register" exact component={HotelRegister}></Route>
          <Route path="/Profile" exact component={Profile}></Route>

          {/* Hotel Dashboard */}
          <Route path="/HotelDashboard" exact component={HotelDashboard}></Route>
          <Route path="/Booking" exact component={HotelBooking}></Route>
          <Route path="/HotelInformation" exact component={HotelInformation}></Route>
          <Route path="/HotelPackage" exact component={HotelPackage}></Route>
          <Route path="/Hotelprofile" exact component={Hotelprofile}></Route>
          <Route path="/Gallery" exact component={Gallery}></Route>
          <Route path="/RoomType" exact component={RoomType}></Route>
          <Route path="/RoomTypeForm" exact component={Roomtypeform}></Route>

          {/* CustomerDashboard */}
          <Route path="/CustomerDashboard" exact component={CustomerDashboard}></Route>

          </Switch>
    </div>
    </BrowserRouter>
  );
}

const Home = () => {
  return (
    <div className="homepage">
      <div className="welcomemessage container">
        <h1 className="font-weight-bold mb-4 mt-0 ">Hotel, Resorts & More</h1>
        <h2>Get the best on prices 2,000,000+ properties, worldwide</h2>
      </div>
            <div className="container con">
              <div className="hotelsearch">
                  <div className="searchbox iconbox">
                  <i class="fa fa-search"/>
                  <div className="inputs">
                    <input type="text" placeholder="Enter a destination"/>
                  </div>
                  </div>
              </div>
      </div>
    </div>

  )
}
export default App;
