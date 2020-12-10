import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/main.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import Booking from "./Booking";

class Admindashboard extends Component {
    render() {
        return(
            <div className="Dashboard">
                <div className="container-fluid">
                <div class="row">
               
<div class="list-group" id="myList" role="tablist">
  <a class="list-group-item list-group-item-action active" data-toggle="list" href="#home" role="tab">New Booking</a>
  <a class="list-group-item list-group-item-action" data-toggle="list" href="#profile" role="tab">Department</a>
    </div>

<div class="tab-content">
        <div class="tab-pane active" id="home" role="tabpanel">{<Booking/>}</div>
  <div class="tab-pane" id="profile" role="tabpanel">dasdasdsadsdsa</div>
  
</div>
</div>
                </div>
            </div>
        )
}
}
export default Admindashboard;