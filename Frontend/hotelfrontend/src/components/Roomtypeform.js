import React, { Component } from "react";
import "../css/main.css";
import $ from "jquery";
import { Link } from "react-router-dom";

class Roomtypeform extends Component {
    componentDidMount(){
        $(".custom-file-input").on("change", function() {
            var fileName = $(this).val().split("\\").pop();
            $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
          });
            }
         render() {return(
             <div className="roomtypeform container-fluid">
                 <form >
                <div className="form-group">
                  <label for="roomtype">Room Type:</label>
                  <input type="text" className="form-control" placeholder="Room Type" id="roomtype"/>
                </div>
                <label>Room Type Photo</label>
                <div className="custom-file">
                  
                  <input type="file" className="custom-file-input" id="customFile"/>
                  <label className="custom-file-label" for="customFile">Room Type Photo </label>
                </div>
                <button type="submit" className="btn btn-primary mt-4">Upload</button>
               <Link to="HotelDashboard"> <button type="submit" className="btn btn-primary mt-4 ml-3" >Exit</button></Link>
                </form>
             </div>
         )}}

         export default Roomtypeform;