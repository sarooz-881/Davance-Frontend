import React, { Component } from "react";
import "../css/main.css";

class HotelInformation extends Component {
    render() {
        return(
            <div className="hotelinformation">
                <form>
                <div className="form-group">
    <label for="exampleFormControlFile1">Upload Photo</label>
    <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">Hotel Name</label>
    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Hotel Name"/>
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">Address</label>
    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Address"/>
  </div>
  
  <div className="form-group">
    <label for="exampleFormControlInput1">Price</label>
    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Price"/>
  </div>
  <div className="form-group">
    <label for="exampleFormControlTextarea1">About</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <div className="form-group row">
    <div className="col-sm-10">
      <button type="submit" className="btn btn-primary font-weight-bold">Upload</button>
    </div>
  </div>
</form>
            </div>
        )}}
        export default HotelInformation;