import Axios from "axios";
import React, { Component } from "react";
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
