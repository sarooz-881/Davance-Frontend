import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/main.css";

class HotelBooking extends Component {
    render() {return(<div className="book">
      
<table className="table table-striped ">
  <thead>
    <tr>
      <th>#</th>
      <th>Check In</th>
      <th>Check Out</th>
      <th>Stay</th>
      <th>Room Type</th>
      <th>Guest</th>
      <th>Room Price</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
      <th>Mobile</th>
      <th>Payment</th>
      <th>Status</th>
      <th>Action</th>
    </tr>
  </thead>
 
  <tbody>
    <tr className="table-info col-mb-7">
      <th scope="row">1</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>    
  </tbody>
</table>

    </div>
         )}
}
    export default HotelBooking;