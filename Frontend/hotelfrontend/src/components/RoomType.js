import React, { Component } from "react";
import "../css/main.css";
import { Link } from "react-router-dom";
import Roomtypeform from "./Roomtypeform";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

class RoomType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      config: {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      },
      room_no: "",
      roomType: "",
      price: ""
    }
  }
  render() {
    return (
      <div className="roomtype">
        <div className="container-fluid">
          <h2 className="ml-4 font-weight-bold">Room Type</h2>
          <Form>
            <FormGroup>
              <Label>Room Number</Label>
              <Input type="text"></Input>
            </FormGroup>
            <FormGroup>
              <Label>Room Type</Label>
              <Input type="text"></Input>
            </FormGroup>
            <FormGroup>
              <Label>Price</Label>
              <Input type="text"></Input>
            </FormGroup>
          </Form>
          <Button>Save Room</Button>
          {/* <Link to="Roomtypeform"><button type="button" id="add" className="btn font-weight-bold btn-primary ml-4"> ADD</button></Link> */}
          <table className="table table-striped mt-5">
            <thead>
              <tr>
                <th>#</th>
                <th>Upload Photo</th>
                <th>Room Type</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr className="table-info col-mb-7">
                <th scope="row">1</th>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default RoomType;
