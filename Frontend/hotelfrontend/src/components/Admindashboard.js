import React, { Component } from "react";
import "../css/main.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import Booking from "./Booking";
import Users from "./Users";
import HotelRegister from "./HotelRegister";
import Profile from "./Profile"
class Admindashboard extends Component {
    render() {
        return(
            <div className="Dashboard">
                <div className="container-fluid">
                <div className="row">
               
                <div className="list-group" id="myList" role="tablist">
                <a className="list-group-item list-group-item-action active" data-toggle="list" href="#home" role="tab">Profile</a>
                <a className="list-group-item list-group-item-action" data-toggle="list" href="#Booking" role="tab">New Booking</a>
                <a className="list-group-item list-group-item-action" data-toggle="list" href="#Users" role="tab">Register Users</a>
                <a className="list-group-item list-group-item-action" data-toggle="list" href="#Register" role="tab">Registration</a>
                
                </div>
                
                <div className="tab-content">
                <div className="tab-pane active" id="home" role="tabpanel">{<Profile/>}</div>
                <div className="tab-pane" id="Booking" role="tabpanel">{<Booking/>}</div>
                <div className="tab-pane" id="Users" role="tabpanel">{<Users/>}</div>
                 <div className="tab-pane" id="Register" role="tabpanel">{<HotelRegister/>}</div>
                
                </div>
                </div>
                </div>
            </div>
        )
}
}
export default Admindashboard;