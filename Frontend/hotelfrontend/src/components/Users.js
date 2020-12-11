import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/main.css";

class Users extends Component {
    render() {return(<div className="users">

<table className="table table-striped ">

 
    <thead>
      <tr>
        <th>#</th>
            <th>Users</th>
                <th>First Name</th>
                  <th>Last Name</th>
                     <th>Email</th>
         <th>Mobile</th>  
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
    </tr>  
    </tbody>
    </table>
    </div>
    )}}
    export default Users;