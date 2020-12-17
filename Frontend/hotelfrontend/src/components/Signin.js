import React, { Component } from "react";
import "../css/main.css";
import axios from "axios";
import { Button } from "reactstrap";
import {Redirect} from 'react-router-dom';


class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      LoggedIn: false,
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3005/ehotel/user/login", this.state)
      .then((res) => {
        console.log(res.data);
        const tokenInfo = res.data.token.split(" ");
        localStorage.setItem('token', tokenInfo[1]);
        this.setState({ LoggedIn: true })
      })
      .catch((err) => console.log(err));
  };
  render() {
    if (this.state.LoggedIn) {
      return <Redirect to='/' />
  }
    return (
      <div className="Register container-fluid mt-5">
        <div className="container">
          <div className="login-box">
            <h2>Sign In</h2>
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

              <Button onClick={this.handleSubmit}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Login
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Signin;
