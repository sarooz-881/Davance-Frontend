import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/main.css";

class Navbar extends Component {
    render() {
        return(
<div className="navbars mb-7">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse font-weight-bold " id="navbarSupportedContent">
          <div className="navbar-header ">
      <Link className="navbar-brand" to="#">WebSiteName</Link>
     </div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link text-white" to="Services">
                  Our Services
                </Link>
              </li>

              <li className="nav-item dropdown">
      <Link className="nav-link dropdown-toggle text-light" to="#" id="navbardrop" data-toggle="dropdown">
        Dropdown link
      </Link>
      <div className="dropdown-menu">
        <Link className="dropdown-item" to="#">Link 1</Link>
        <Link className="dropdown-item" to="#">Link 2</Link>
        <Link className="dropdown-item" to="#">Link 3</Link>
      </div>
    </li>

              <li className="nav-item ">
                <Link className="nav-link text-white" to="Contact">
                  contact
                </Link>
              </li>
              
            </ul>
            <ul className="nav navbar-nav navbar-right  ">
      <li className="nav-item mr-4 text-light"><Link to="Signup" className="text-light"><span className="glyphicon glyphicon-user text-light"></span> Sign Up</Link></li>
      <li className="nav-item mr-4"> <Link to="Signin" className="text-light"><span className="glyphicon glyphicon-log-in text-light"></span> Login</Link></li>
    </ul>
          </div>
       
        
        </nav>
      </div>
        )
    }
}
export default Navbar;
