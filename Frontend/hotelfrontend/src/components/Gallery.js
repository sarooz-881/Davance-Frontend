import React, { Component } from "react";
import "../css/main.css";
import $ from "jquery";

class Gallery extends Component {
    componentDidMount(){
$(".custom-file-input").on("change", function() {
    var fileName = $(this).val().split("\\").pop();
    $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
  });
    }
    render() {return(
        <div className="gallery">
            <div className="container-fluid ">
                <h2 className="ml-3 mb-4 font-weight-bold">Gallery Upload</h2>
                <form>
                <div className="custom-file mb-4">
                  <input type="file" className="custom-file-input" id="customFile"/>
                  <label className="custom-file-label" for="customFile">Choose file</label>
                </div>
                </form>
              <button type="button" className="btn btn-info mt-3 font-weight-bold ">Upload</button>
            </div>
        </div>
    )}}
    export default Gallery;