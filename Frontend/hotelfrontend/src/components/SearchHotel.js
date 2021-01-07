import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/main.css";
import barahi from "../image/barahi.jpg";
import HotelBookingDetail from "./HotelBookingDetail";

class SearchHotel extends Component {
 
    render() {
     
        return(<div className="fsh container mt-5">
            <div className="searchhotel">
            <div className="row">
                   <div className="col-lg-5 col-sm-5">
                   <img className="image" src={barahi}/>
                   </div>
                   <div className="col-lg-6 col-sm-6">
                       <h3 className="mt-3 font-weight-bold">Hotel Prince Plaza</h3>
                       <p className="address">Gyaneshwor, Kathmandu</p>
                       <div className="rating MR MR1 MR2">
                            <input type="radio" name="star" id="star1"/>
                            <label for="star1"></label>
                            <input type="radio" name="star" id="star2"/>
                            <label for="star2"></label>
                            <input type="radio" name="star" id="star3"/>
                            <label for="star3"></label>
                            <input type="radio" name="star" id="star4"/>
                            <label for="star4"></label>
                            <input type="radio" name="star" id="star5"/>
                            <label for="star5"></label>                            
                          </div>
                        <div className="service">
                            <span><i className="fa fa-wifi"/><p >WIFI</p></span>
                            <span><i className="fa fa-automobile"/><p>Free Parking</p></span>
                            <span><i class='fas fa-swimmer'/><p>Swimming Pool</p></span>
                        </div>
                        <div className="row infos">
                            <div className="col-lg-6 col-sm-6">
                                <p className="roomtype">Deluxe(3X)</p>
                                <h2 className="price">NPR 1920</h2>
                                <p className="prpn">Per Room Per Night</p>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                                 <Link to="HotelBookingDetail">   <button className="det" type="submit">Detail</button></Link>
                                </div>
                        </div>
                     </div>
                    </div>
                    </div>
        </div>)}}
        export default SearchHotel;