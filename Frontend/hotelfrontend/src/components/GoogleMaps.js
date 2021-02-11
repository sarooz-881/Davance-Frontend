import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class GoogleMaps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: props.history.location.state[0].lat,
      lng: props.history.location.state[0].lng,
      hotelName: props.history.location.state[0].name,
    };
  }
  onMapClicked = (mapProps, map, clickEvent) => {
    console.log("Map is clicked...")
  };
  render() {
    return (
      <Map
        google={this.props.google}
        style={{
          width: "100%",
          height: "100%",
        }}
        initialCenter={{
          lat: this.state.lat,
          lng: this.state.lng
        }}
        zoom={18}
        onClick={this.onMapClicked}
      >
        <Marker onClick={this.onMarkerClick} name={"Current location"} />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>{this.state.hotelName}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBtb48OlHQBaZawzU5hqkZodpnJneC61Kw",
})(GoogleMaps);
