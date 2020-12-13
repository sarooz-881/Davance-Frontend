import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/main.css";
import HotelBooking from "./HotelBooking";
import HotelInformation from "./HotelInformation";
import HotelPackage from "./HotelPackage";
import Profile from "./Profile";
class HotelDashboard extends Component {
    render() {
        return(
            <div className="Dashboard">
                <div className="container-fluid">
                <div className="row">
               
                <div className="list-group" id="myList" role="tablist">
                <a className="list-group-item list-group-item-action active" data-toggle="list" href="#home" role="tab">Profile</a>
                <a className="list-group-item list-group-item-action" data-toggle="list" href="#Booking" role="tab">New Booking</a>
                <a className="list-group-item list-group-item-action" data-toggle="list" href="#Upload" role="tab">Upload Information</a>
                <a className="list-group-item list-group-item-action" data-toggle="list" href="#package" role="tab">Hotel Package</a>
                
                </div>
                
                <div className="tab-content">
                <div className="tab-pane active" id="home" role="tabpanel">{<Profile/>}</div>
                <div className="tab-pane" id="Booking" role="tabpanel">{<HotelBooking/>}</div>
                <div className="tab-pane" id="Upload" role="tabpanel">{<HotelInformation/>}</div>
                <div className="tab-pane" id="package" role="tabpanel">{<HotelPackage/>}</div>
               
                </div>
                </div>
                </div>
            </div>
        )
}
}
export default HotelDashboard;