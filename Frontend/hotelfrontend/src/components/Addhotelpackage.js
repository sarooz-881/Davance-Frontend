import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/main.css";

class AddHotelPackage extends Component {
    render() {return(<div className="addhotelpackage">
      <div className="container-fluid">
        <h3 className="font-weight-bold">Add Hotel Package</h3>
        <form className="form-inline">

  <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Hotel Package"/>
 <button type="submit" className="font-weight-bold btn btn-primary mb-2">Add</button>
 <Link to={`HotelPackage`}><button type="submit" className="ml-3 font-weight-bold btn btn-primary mb-2">Exit</button></Link>
</form>
        </div>
  
    </div>)}}
    export default AddHotelPackage;