import React, { Component } from "react";
import {Link} from "react-router-dom";
import "../css/main.css";

class Signin extends Component {
    render() {
        return(

            <div className="Register container-fluid mt-5">
               <div className="container">
               <div className="login-box">
             <h2>Sign In</h2>
                <form>
                 <div className="user-box">
                           <input type="text" name="email" required=""/>
                           <label>Email</label>
                     </div>

                     
                             <div className="user-box">
                               <input type="password" name="password" required=""/>
                              <label>Password</label>
                                    </div>
                                   
                                    <Link to="#">
                                      <span></span>
                                      <span></span>
                                      <span></span>
                                      <span></span>
                                     Sign In
                                    </Link>
                                    </form>
                                    </div>
                                    </div>
                                      </div>
        )
    }
}
        export default Signin;
