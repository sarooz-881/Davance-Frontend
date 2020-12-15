import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/main.css";


class HotelPackage extends Component {
    render() {return(<div className="hotelpackage">
        <div className="ml-5">
        <div className="form-group row">
         <div className="col-md-10 mt-3">
         <h3 className="font-weight-bold">Add Hotel Package</h3>
          <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Hotel Package"/>
          <button type="submit" className="font-weight-bold btn btn-primary mb-2">Add</button>
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