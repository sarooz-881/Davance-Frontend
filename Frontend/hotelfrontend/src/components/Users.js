import React, { Component } from "react";
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
    <td>prijaymaharjan</td>
    <td>prijay</td>
    <td>maharjan</td>
    <td>prijaymaharjan@gmail.com</td>
    <td>9845924073</td>
    <td>  <button type="button" className="btn btn-danger mt-3"><i className="fa fa-trash-o"/></button></td>
   
    </tr>  
    </tbody>
    </table>
    </div>
    )}}
    export default Users;