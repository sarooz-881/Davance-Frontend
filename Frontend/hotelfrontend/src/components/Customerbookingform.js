import Axios from "axios";
import React, { Component } from "react";
import { Input } from "reactstrap";
class Customerbookingform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "",
      state: "",
      street: "",
      firstName: "",
      lastName: "",
      contact: "",
      email: "",
      citizen_id: "",
      balance: "",
      gender: "male",

      bookingSuccessful: false,

      config: {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      },
    };
  }
  handleGenderChange = (e) => {
    this.setState({ gender: e.target.value });
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    Axios.post(
      "http://localhost:3005/ehotel/guest",
      {
        address: {
          country: this.state.country,
          state: this.state.state,
          street: this.state.street,
        },
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        contact: this.state.contact,
        email: this.state.email,
        citizen_id: this.state.citizen_id,
        balance: this.state.balance,
        gender: this.state.gender,
      },
      this.state.config
    )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div className="c-9ugfym container mt-5">
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>First Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label>Last Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Citizen ID</label>
              <input
                type="text"
                className="form-control"
                placeholder="Citizen ID"
                name="citizen_id"
                value={this.state.citizen_id}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label>Mobile Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Mobile Number"
                name="contact"
                value={this.state.contact}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              style={{ padding: "2rem", fontSize: "1.2rem" }}
            />
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <div className="user-box-select">
                <label>Select Gender</label>
                <Input
                  className="user-box-select-item"
                  type="select"
                  onChange={this.handleGenderChange}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </Input>
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Country</label>
              <input
                type="text"
                className="form-control"
                placeholder="Country"
                name="country"
                value={this.state.country}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label>State</label>
              <input
                type="text"
                className="form-control"
                placeholder="State"
                name="state"
                value={this.state.state}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label>Street</label>
              <input
                type="text"
                className="form-control"
                placeholder="Street"
                name="street"
                value={this.state.street}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label>Balance in Rs.</label>
              <input
                type="text"
                className="form-control"
                placeholder="eg: Rs. 5000"
                name="balance"
                value={this.state.balance}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default Customerbookingform;
