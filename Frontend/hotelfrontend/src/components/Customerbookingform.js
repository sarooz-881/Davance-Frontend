import React, { Component } from "react";
class Customerbookingform extends Component {
    render() {
        return(
            <div className="c-9ugfym container mt-5" >
                <form >
  <div className="form-row">
    <div className="form-group col-md-6">
      <label>First Name</label>
      <input type="text" className="form-control"  placeholder="First Name"/>
    </div>
    <div className="form-group col-md-6">
      <label >Last Name</label>
      <input type="text" className="form-control"  placeholder="Last Name"/>
    </div>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label>Country Code</label>
      <input type="text" className="form-control"  placeholder="Country Code"/>
    </div>
    <div className="form-group col-md-6">
      <label >Mobile Number</label>
      <input type="text" className="form-control"  placeholder="Mobile Number"/>
    </div>
  </div>
  <div className="form-group">
    <label>Email</label>
    <input type="text" className="form-control"  placeholder="Email"/>
  </div>
 
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
            </div>
        )}}
        export default Customerbookingform;