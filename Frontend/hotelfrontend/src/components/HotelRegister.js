import Axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/main.css";

class HotelRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      hotelName: "",
      contact: "",
      description: "",
      config: {
        headers: { Authorization: 'Bearer ' + localStorage.getItem("token") },
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    Axios.post(
      "http://localhost:3005/ehotel/hotel",
      {
        email: this.state.email,
        hotelName: this.state.hotelName,
        contact: this.state.contact,
        description: this.state.description,
      },
      this.state.config
    )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });
  render() {
    return (
      <div className="register">
        <form>
          <div className="form-group">
            <label for="email">Hotel Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Hotel email address"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label for="hotelname">Hotel Name</label>
            <input
              type="text"
              className="form-control"
              id="hotelname"
              name="hotelName"
              placeholder="Hotel Name"
              value={this.state.hotelName}
              onChange={this.handleChange}
            />
          </div>
          {/* <div className="form-group">
            <label for="firstname">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              placeholder="First Name"
            />
          </div>
          <div className="form-group">
            <label for="lastname">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              placeholder="Last Name"
            />
          </div> */}
          <div className="form-group">
            <label for="contact">Contact</label>
            <input
              type="text"
              className="form-control"
              id="contact"
              name="contact"
              placeholder="Contact Number"
              value={this.state.contact}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label for="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              placeholder="Some description about my hotel...."
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>

          {/* <div className="form-row">
            <div className="form-group col-md-4">
              <label className="my-1 mr-2" for="Role">
                Role
              </label>
              <select
                className="custom-select my-1 mr-sm-2"
                className="form-control form-controls"
                id="Role"
              >
                <option selected>Admin</option>
                <option value="1">Hotel Manager</option>
              </select>
            </div>
          </div> */}
          {/* <div className="form-group">
            <label className="my-1 mr-2 mb-4" for="Role">
              Gender
            </label>
            <div className="custom-control custom-radio">
              <input
                type="radio"
                id="customRadio1"
                name="customRadio"
                className="custom-control-input mt-2"
              />
              <label className="custom-control-label" for="customRadio1">
                Male
              </label>
            </div>
            <div className="custom-control custom-radio">
              <input
                type="radio"
                id="customRadio2"
                name="customRadio"
                className="custom-control-input"
              />
              <label className="custom-control-label" for="customRadio2">
                Female
              </label>
            </div>
            <div className="custom-control custom-radio">
              <input
                type="radio"
                id="customRadio2"
                name="customRadio"
                className="custom-control-input"
              />
              <label className="custom-control-label" for="customRadio2">
                Other
              </label>
            </div>
          </div> */}
          <button
            type="submit"
            className="btn btn-primary reg"
            onClick={this.handleSubmit}
          >
            Register
          </button>
        </form>
      </div>
    );
  }
}
export default HotelRegister;
