import React, { Component } from "react";
import "../css/main.css";
import { Alert, Button, Input } from "reactstrap";
import Axios from "axios";

class Hotelprofile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotelExists: false,
      hotelID: "",
      hotelInfo: [],
      hotelEmail: "",
      hotelName: "",
      hotelContact: "",
      hotelDescription: "",
      config: {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      },

      country: "",
      state: "",
      street: "",
      Name: "",
      email: "",
      mobile: ""
    };
  }
  componentDidMount = () => {
    Axios.get("http://localhost:3005/ehotel/hotel", this.state.config)
      .then((res) => {
        console.log(res.data);
        if (res.data.length === 0) {
          this.setState({ hotelExists: false });
        } else {
          this.setState({
            hotelEmail: res.data[0].email,
            hotelContact: res.data[0].contact,
            hotelName: res.data[0].hotelName,
            hotelDescription: res.data[0].description,
            hotelInfo: res.data[0],
            hotelID: res.data[0]._id,
            hotelExists: true,
            
          });
          if (res.data[0].hotelOwner.length !== 0) {
            this.setState({
              Name: res.data[0].hotelOwner[0].ownerName,
              email: res.data[0].hotelOwner[0].email,
              mobile: res.data[0].hotelOwner[0].contact
            });
          }

          if (res.data[0].address.length !== 0) {
            this.setState({
              country: res.data[0].address[0].country,
              state: res.data[0].address[0].state,
              street: res.data[0].address[0].street,
            });
          }
        }
      })
      .catch((err) => console.log(err));
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.hotelExists) {
      Axios.post(
        "http://localhost:3005/ehotel/hotel",
        {
          email: this.state.hotelEmail,
          hotelName: this.state.hotelName,
          contact: this.state.hotelContact,
          description: this.state.hotelDescription,
        },
        this.state.config
      )
        .then((res) => {
          console.log(res.data);
          this.setState({ hotelExists : true})
          // Axios.post(
          //   `http://localhost:3005/ehotel/hotel/${res.data[0]._id}/address`,
          //   {
          //     country: this.state.country,
          //     state: this.state.state,
          //     street: this.state.street,
          //   },
          //   this.state.config
          // ).then((res) => {
          //   console.log(res.data);
          // });
        })
        .catch((err) => console.log(err));
    } else {
      Axios.put(
        `http://localhost:3005/ehotel/hotel/${this.state.hotelID}`,
        {
          email: this.state.hotelEmail,
          hotelName: this.state.hotelName,
          contact: this.state.hotelContact,
          description: this.state.hotelDescription,
        },
        this.state.config
      )
        .then((res) => {
          console.log(res.data);
          Axios.post(
            `http://localhost:3005/ehotel/hotel/${this.state.hotelID}/address`,
            {
              country: this.state.country,
              state: this.state.state,
              street: this.state.street,
            },
            this.state.config
          ).then((res) => {
            console.log(res.data);
          });
          Axios.post(
            `http://localhost:3005/ehotel/hotel/${this.state.hotelID}/hotelOwner`,
            {
              ownerName: this.state.Name,
              email: this.state.email,
              contact: this.state.mobile,
            },
            this.state.config
          ).then((res) => {
            console.log(res.data);
          });
        })
        .catch((err) => console.log(err));
    }
  };

  render() {
    return (
      <div className="profile">
        <div className="container-fluid col-lg-12">
          <div className="tab-pane ">
            <h2>Owner Information</h2>
            <hr />

            <div className="row">
              <div className="col-md-6">
                <label>Name</label>
              </div>
              <div className="col-md-6">
              <Input className="inp"
                  id="Name"
                  name="Name"
                  placeholder="Enter Hotel owner name here...."
                  value={this.state.Name}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <label>Email</label>
              </div>
              <div className="col-md-6">
              <Input
              className="inp"
                  id="email"
                  name="email"
                  placeholder="Enter owner email here...."
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <label>Mobile</label>
              </div>
              <div className="col-md-6">
              <Input
              className="inp"
                  id="mobile"
                  name="mobile"
                  placeholder="Enter owner contact here...."
                  value={this.state.mobile}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <h2 style={{ marginTop: "2rem" }}>Hotel Information</h2>
            <hr />
            <div className="row">
              <div className="col-md-6">
                <label>Hotel Name</label>
              </div>
              <div className="col-md-6">
                <Input className="inp"
                  id="hotelName"
                  name="hotelName"
                  placeholder="Enter Hotel name here...."
                  value={this.state.hotelName}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label>Hotel Email</label>
              </div>
              <div className="col-md-6">
                <Input className="inp"
                  id="hotelEmail"
                  name="hotelEmail"
                  placeholder="Enter Hotel email here...."
                  value={this.state.hotelEmail}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <label>Hotel Contact</label>
              </div>
              <div className="col-md-6">
                <Input
                  className="inp"
                  id="hotelContact"
                  name="hotelContact"
                  placeholder="Enter Hotel contact here...."
                  value={this.state.hotelContact}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label>Description</label>
              </div>
              <div className="col-md-6">
                <Input className="inp"
                  id="hotelDescription"
                  name="hotelDescription"
                  placeholder="Enter Hotel Description here...."
                  value={this.state.hotelDescription}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <label>Address</label>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-6">
                <label>Country</label>
              </div>
              <div className="col-md-6">
                <Input className="inp"
                  id="country"
                  name="country"
                  placeholder="Choose country...."
                  value={this.state.country}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label>State</label>
              </div>
              <div className="col-md-6">
                <Input className="inp"
                  id="state"
                  name="state"
                  placeholder="Choose state...."
                  value={this.state.state}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label>Street</label>
              </div>
              <div className="col-md-6">
                <Input className="inp"
                  id="street"
                  name="street"
                  placeholder="Choose street...."
                  value={this.state.street}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Button
            color="primary"
            style={{
              margin: "3rem",
              padding: "0.7rem 1.2rem",
              fontSize: "1.8rem",
            }}
            onClick={this.handleSubmit}
          >
            Update
          </Button>
        </div>
      </div>
    );
  }
}
export default Hotelprofile;
