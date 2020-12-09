import React, { Component } from "react";
import {Link} from "react-router-dom";
import "../css/main.css";

class Signup extends Component {
    render() {
        return(

            <div className="Register container-fluid mt-5">
               <div className="container">
               <div className="login-box">
             <h2>Signup</h2>
                <form>
                 <div className="user-box">
                           <input type="text" name="email" required=""/>
                           <label>Email</label>
                     </div>
                             <div className="user-box">
                               <input type="password" name="password" required=""/>
                              <label>Password</label>
                                    </div>
                                    <div className="user-box">
                                     <input type="text" name="firstname" required=""/>
                                       <label>First Name</label>
                                    </div>
                                    <div className="user-box">
                                    <input type="text" name="lastname" required=""/>
                                        <label>Lastname</label>
                                    </div>
                                    <div className="user-box">
                                    <input type="text" name="lastname" required=""/>
                                        <label>Mobile</label>
                                    </div>
                                    <div className="user-box">
                                        <p className="text-light">By Signup You accept the Terms and Conditions <br/>
                                            and Privacy Statement
                                        </p>
                                    </div>
                                    <Link to="#">
                                      <span></span>
                                      <span></span>
                                      <span></span>
                                      <span></span>
                                      Register
                                    </Link>
                                    </form>
                                    </div>
                                    </div>
                                      </div>
        )
    }
}
        export default Signup;
