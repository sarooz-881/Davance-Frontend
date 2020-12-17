import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/main.css";

class HotelRegister extends Component {
    render() {return(<div className="register">
        <form>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="email">Email</label>
      <input type="email" className="form-control" id="email" placeholder="Email"/>
    </div>
    <div className="form-group">
    <label for="mobile">Password</label>
    <input type="text" className="form-control" id="password" placeholder="Password"/>
  </div>
    
    <div className="form-group col-md-6">
      <label for="firstname">First Name</label>
      <input type="text" className="form-control" id="firstname" placeholder="firstname"/>
    </div>
  </div>
  <div className="form-group">
    <label for="hotelname">Hotel Name</label>
    <input type="text" className="form-control" id="hotelname" placeholder="Hotel Name"/>
  </div>
  <div className="form-group">
    <label for="lastname">Last Name</label>
    <input type="text" className="form-control" id="lastname" placeholder="Last Name"/>
  </div>
  <div className="form-group">
    <label for="mobile">Mobile</label>
    <input type="text" className="form-control" id="mobile" placeholder="Mobile"/>
  </div>
   <div className="form-group">
    <label for="mobile">Mobile</label>
    <input type="text" className="form-control" id="mobile" placeholder="Mobile"/>
  </div>
  
  <div className="form-row">
   
    <div className="form-group col-md-4">
    <label className="my-1 mr-2" for="Role" >Role</label>
  <select className="custom-select my-1 mr-sm-2"className="form-control form-controls" id="Role">
    <option selected>Admin</option>
    <option value="1">Hotel Manager</option>
   
  </select>
    </div>
   
  </div>
  <div className="form-group">
  <label className="my-1 mr-2 mb-4" for="Role" >Gender</label>
  <div className="custom-control custom-radio">
 
  <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input mt-2"/>
  <label className="custom-control-label" for="customRadio1">Male</label>
</div>
<div className="custom-control custom-radio">
  <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input"/>
  <label className="custom-control-label" for="customRadio2">Female</label>
</div>
<div className="custom-control custom-radio">
  <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input"/>
  <label className="custom-control-label" for="customRadio2">Other</label>
</div>
  </div>
  <button type="submit" className="btn btn-primary reg">Register</button>
</form>
    </div>)}}
    export default HotelRegister;