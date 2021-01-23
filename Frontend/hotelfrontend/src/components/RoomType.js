import React, { Component } from "react";
import "../css/main.css";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import Axios from "axios";
import { Link } from "react-router-dom";
import Roomtypeform from "./Roomtypeform";
import $ from "jquery";
import singlebed from "../image/singlebed.jpeg"
class RoomType extends Component {

  componentDidMount(){
    $(".custom-file-input").on("change", function() {
        var fileName = $(this).val().split("\\").pop();
        $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
      });
        }
  constructor(props) {
    super(props);
    this.state = {
      config: {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      },
      room_no: "",
      roomType: "",
      price: "",
      hotelID: "",
      RoomList: [],
    };
  }
  componentDidMount = () => {
    Axios.get("http://localhost:3005/ehotel/hotel", this.state.config)
      .then((res) => {
        console.log(res.data);
        if (res.data.length !== 0) {
          this.setState({
            hotelID: res.data[0]._id,
          });
          Axios.get(
            `http://localhost:3005/ehotel/hotel/${res.data[0]._id}/rooms`,
            this.state.config
          ).then((resRoom) => {
            console.log(resRoom.data);
            this.setState({
              RoomList: resRoom.data,
            });
          });
        }
      })
      .catch((err) => console.log(err));
  };
  handleSubmit = (e) => {
    e.preventDefault();
    Axios.post(
      `http://localhost:3005/ehotel/hotel/${this.state.hotelID}/rooms`,
      {
        room_no: this.state.room_no,
        roomType: this.state.roomType,
        price: this.state.price,
      },
      this.state.config
    )
      .then((res) => {
        console.log(res.data);
        this.setState({
          RoomList: [...this.state.RoomList, res.data],
          room_no: "",
          roomType: "",
          price: "",
        });
        alert("Room is saved....");
      })
      .catch((err) => console.log(err));
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleDelete = (RID) => {
    const result = window.confirm("Are you sure to delete this package?");
    if (result) {
      Axios.delete(
        `http://localhost:3005/ehotel/hotel/${this.state.hotelID}/rooms/${RID}`,
        this.state.config
      )
        .then((res) => {
          console.log(res.data);
          const filterData = this.state.RoomList.filter((item) => {
            return item._id !== RID;
          });
          this.setState({
            RoomList: filterData,
            room_no: "",
            roomType: "",
            price: "",
          });
        })
        .catch((err) => console.log(err));
    }
  };
  render() {
    return (
      <div className="roomtype">
        <div className="container-fluid">
          <h2 className="ml-4 font-weight-bold">Room Type</h2>
          <Form>
            <FormGroup>
              <Label>Room Number</Label>
              <Input
                type="text"
                name="room_no"
                value={this.state.room_no}
                onChange={this.handleChange}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label>Room Type</Label>
              <Input
                type="text"
                name="roomType"
                value={this.state.roomType}
                onChange={this.handleChange}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label>Price</Label>
              <Input
                type="text"
                name="price"
                value={this.state.price}
                onChange={this.handleChange}
              ></Input>
            </FormGroup>
          </Form>
          <Button onClick={this.handleSubmit}>Save Room</Button>
          <table className="table table-striped mt-5">
            <thead>
              <tr>
                <th>S.N.</th>
                <th>Upload Photo</th>
                <th>Room Number</th>
                <th>Room Type</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            {this.state.RoomList.map((item) => {
              return (
                <tbody key={item._id}>
                  <tr className="table-info col-mb-7">
                    <th scope="row">&#10084;</th>
                    <td></td>
                    <td>{item.room_no}</td>
                    <td>{item.roomType}</td>
                    <td>{item.price}</td>
                    <td>
                      <Button
                        color="danger"
                        onClick={() => this.handleDelete(item._id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    );
  }
}
export default RoomType;
