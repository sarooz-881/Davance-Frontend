import React, { Component } from "react";
import "../css/main.css";


class Profile extends Component {
    render() {
        return(
            <div className="profile">
                <div className="container-fluid col-lg-12">
                <div className="tab-pane ">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p></p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <label>First Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p></p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <label>Last Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p></p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Mobile</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p></p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Address</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p></p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div class="col-md-6">
                                                <label>Role</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p></p>
                                            </div>
                                        </div>
                            </div>
                </div>
            </div>
        )}}
        export default Profile;