import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/main.css";
import AddHotelPackage from "./Addhotelpackage";

class HotelPackage extends Component {
    render() {return(<div className="hotelpackage">
        <div className="ml-5">
        <div className="form-group row">
         <div className="col-md-10 mt-3">
         <h3 className="font-weight-bold">Add Hotel Package</h3>
        <Link to={`AddHotelPackage`}><button type="submit" className="btn btn-primary font-weight-bold">Add</button></Link>
        </div>   
        </div>


        <div className="container-fluid md-10">
        <table className="table table-striped ">

 
<thead>
  <tr>
    <th>#</th>
    <th>Hotel Package</th>
    <th>Action</th>
      </tr>
</thead>

<tbody>
  <tr className="table-info col-mb-7">
    <th scope="row">1</th>
    <td></td>
    <td></td>  
  </tr>  
</tbody>
</table>
       </div>
        </div>
     
        

 
    </div>)}}
    export default HotelPackage;