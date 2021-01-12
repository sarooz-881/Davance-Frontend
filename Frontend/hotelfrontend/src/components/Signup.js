import React, { Component } from "react";
import "../css/main.css";
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import { Button, Input } from "reactstrap";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: "",
      role: "guest",
      RegisteredIn: false,
    };
  }
  handleRoleChange = (e) => {
    this.setState({ role: e.target.value });
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3005/ehotel/user/register', this.state)
    .then((res) => {
        console.log(res.data)
        const tokenInfo = res.data.token.split(" ");
        localStorage.setItem('token', tokenInfo[1]);
        this.setState({ RegisteredIn: true })
    }).catch( err  => console.log(err));
}

  render() {
    if (this.state.RegisteredIn) {
      return <Redirect to='/' />
  }
    return (
      <div className="Register container-fluid mt-5">
        <div className="container">
          <div className="login-box">
            <h2>Signup</h2>
            <form>
              <div className="user-box">
                <input
                  type="text"
                  name="username"
                  onChange={this.handleChange}
                  value={this.state.username}
                  required=""
                />
                <label>Username</label>
              </div>

              <div className="user-box">
                <input
                  type="password"
                  name="password"
                  onChange={this.handleChange}
                  value={this.state.password}
                  required=""
                />
                <label>Password</label>
              </div>
              <div className="user-box">
                <input
                  type="text"
                  name="firstName"
                  onChange={this.handleChange}
                  value={this.state.firstName}
                  required=""
                />
                <label>First Name</label>
              </div>
              <div className="user-box">
                <input
                  type="text"
                  name="lastName"
                  onChange={this.handleChange}
                  value={this.state.lastName}
                  required=""
                />
                <label>Lastname</label>
              </div>
              <div className="user-box">
                <input
                  type="text"
                  name="email"
                  onChange={this.handleChange}
                  value={this.state.email}
                  required=""
                />
                <label>Email</label>
              </div>
              <div className="user-box-select">
                <label>Select Role</label>
                <Input className="user-box-select-item" type="select" onChange={this.handleRoleChange}>
                  <option value="guest">guest</option>
                  <option value="hotelOwner">hotelOwner</option>
                  <option value="admin">admin</option>
                </Input>
              </div>

              <div className="user-box">
                <p className="text-light">
                  By Signup You accept the Terms and Conditions
                  and Privacy Statement
                </p>
              </div>
              <Button onClick={this.handleSubmit}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Register
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Signup;
