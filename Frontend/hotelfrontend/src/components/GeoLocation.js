import React, { Component } from "react";
import "../css/main.css";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import Axios from "axios";

class Geolocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: "",
      lng: "",
      config: {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      },
      hotelID : ""
    };
  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });
  componentDidMount = () => {
    Axios.get("http://localhost:3005/ehotel/hotel", this.state.config)
      .then((res) => {
        console.log(res.data[0]);
        if (res.data.length !== 0) {
          this.setState({
            hotelID: res.data[0]._id,
          });
        }
        if (res.data[0].latitude) {
          this.setState({
            lat: res.data[0].latitude,
            lng: res.data[0].longitude
          })
        }
      }
  )};

  handleSubmit = (e) => {
    e.preventDefault();
    Axios.patch(`http://localhost:3005/ehotel/hotel/geoLocation/${this.state.hotelID}`, {
      latitude: this.state.lat,
      longitude: this.state.lng
    }, 
    this.state.config
    ).then((res) => {
        console.log(res.data);
        alert("Geo Location saved....")
    });
  };

  render() {
    return (
      <div>
        <h1>Hotel Geo Location</h1>
        <Form>
          <FormGroup>
            <Label htmlFor="lat">Latitudes</Label>
            <Input
              name="lat"
              type="text"
              id="lat"
              value={this.state.lat}
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="lng">Longitudes</Label>
            <Input
              name="lng"
              type="text"
              id="lng"
              value={this.state.lng}
              onChange={this.handleChange}
            ></Input>
            <Button color="primary" onClick={this.handleSubmit} style={{ marginTop: "2rem" }}>
              Update
            </Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
export default Geolocation;
