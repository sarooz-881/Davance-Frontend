import React, { Component } from "react";
import "../css/main.css";

class RoomType extends Component {
      render() {return(
        <div className="roomtype">
          <div className="container-fluid">
                <h2 className="ml-4 font-weight-bold">Room Type</h2>
                <button type="button" className="btn font-weight-bold btn-primary ml-4">ADD</button>                
                <table className="table table-striped mt-5">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Upload Photo</th>
                      <th>Room Type</th>
                      <th>Package</th>
                      <th>Package</th>
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
                   </tr>    
                  </tbody>
                  </table>
            </div>    
        </div>
    )}}
    export default RoomType;