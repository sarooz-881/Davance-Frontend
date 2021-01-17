import React, { Component}from "react";
import "../css/main.css";
import hotelroom from "../image/hotelroom.jpeg"
import dollaricon from "../image/dollaricon.png"


class CustomerDashboard extends Component {
  
    render() {

        
        return(
            <div className="customerdashboard">
                <div className="container">
 
  <ul className="nav nav-pills shadow" role="tablist">
    <li className="nav-item">
      <a className="nav-link active" data-toggle="pill" href="#home">My Dashboard</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" data-toggle="pill" href="#menu1">Booking </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" data-toggle="pill" href="#menu2">Cancallation</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" data-toggle="pill" href="#menu3">My Wallet</a>
    </li>
  </ul>

 
  <div className="tab-content">
    {/* MY DASHBOARD */}
    <div id="home" className="container tab-pane active"><br/>

    <section className="py-5 header sideinformation">

    <div className="container py-4">
                <div className="row">
            <div className="col-md-3">
              
                <div className="nav flex-column nav-pills nav-pills-custom" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a className="nav-link mb-3 p-3 shadow active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                        <i className="fa fa-user-circle-o mr-2"></i>
                        <span className="font-weight-bold small text-uppercase">Personal information</span></a>

                    {/* <a className="nav-link mb-3 p-3 shadow" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                        <i className="fa fa-calendar-minus-o mr-2"></i>
                        <span className="font-weight-bold small text-uppercase">Bookings</span></a> */}

                    <a className="nav-link mb-3 p-3 shadow" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                        <i className="fa fa-star mr-2"></i>
                        <span className="font-weight-bold small text-uppercase">Reviews</span></a>

                    <a className="nav-link mb-3 p-3 shadow" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                        <i className="fa fa-check mr-2"></i>
                        <span className="font-weight-bold small text-uppercase">Confirm booking</span></a>
                    </div>
            </div>


            <div className="col-md-9">
              {/* Personal Information */}
                <div className="tab-content verticaltab" id="v-pills-tabContent">
                    <div className="tab-pane fade shadow rounded bg-white show active p-5" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                        <h3 className="font30 mb-4">Profile</h3>
                        <p className="font18 mb-2">Basic info, for a faster booking experience</p>
                        <div className="row mt-5">
                          <div className="col-sm-3 col-md-2 col-5">
                            <label>Username </label>
                          </div>
                          <div className="col-md-8 col-6 ">
                                              <p> harithapa </p>
                                           
                           </div>
                        </div>
                       <hr/>
                        <div className="row">
                          <div className="col-sm-3 col-md-2 col-5">
                            <label>First Name</label>
                         
                          </div>
                          <div className="col-md-8 col-6">
                                       <p>hari</p>
                                     
                           </div>
                        </div>
                        <hr/>
                        <div className="row">
                          <div className="col-sm-3 col-md-2 col-5">
                            <label>Last Name</label>
                          </div>
                          <div className="col-md-8 col-6">
                                           <p>Thapa </p>
                                          
                           </div>                          
                        </div>
                        <hr/>
                        <div className="row">
                          <div className="col-sm-3 col-md-2 col-5">
                            <label>Email</label>
                          </div>
                          <div className="col-md-8 col-6">
                                           <p>harithapa@gmail.com </p>
                           </div>
                        </div>
                        <hr/>
                        <div className="row">
                          <div className="col-sm-3 col-md-2 col-5">
                            <label>Role</label>
                           
                          </div>
                          <div className="col-md-8 col-6">
                                            <p> Male </p>
                                           
                           </div>
                        </div>
                        <hr/>
                    </div>
                    

                    
                    {/* <div className="tab-pane fade shadow rounded bg-white p-5" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                        <h4 className="font-italic mb-4">Bookings</h4>
                        <p className="font-italic text-muted mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div> */}
                    
                    {/* Reviews */}
                    <div className="tab-pane fade shadow rounded bg-white p-5" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                       <div className="row">
                       <div className="col-5">
                        <img className="reviewimage" src={hotelroom}/>
                        </div>

                        <div className="col-6">
                          <h3 className="heads font-weight-bold">The Fern Residency</h3>
                          <p className="format-address">CG Landmark | Bharatpur Heights 44200, Nepal</p>
                          <div className="rating pb-5">
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
                          <form className="feedbackforms">
                          <div className="form-group">
                            <label for="exampleFormControlInput1">Title of your review</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                          </div>


                          <div className="form-group">
                            <label for="exampleFormControlTextarea1">Your review</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                          </div>

                          <div className="form-group">
                            <label for="inputState">When did you travel?</label>
                            <select id="inputState" className="form-control options">
                              <option selected>Select One</option>
                              <option>January</option>
                              <option>February</option>
                              <option>March</option>
                              <option>April</option>
                              <option>May</option>
                              <option>June</option>
                              <option>July</option>
                              <option>Augest</option>
                              <option>September</option>
                              <option>October</option>
                              <option>November</option>
                              <option>December</option>
                            </select>

                            <button type="submit" className=" mt-4 btn btn-primary">Submit</button>
                            </div>
                          </form>
                         </div>
                       </div>
                        </div>
                    
                    {/* Confirm Booking */}
                    <div className="tab-pane fade shadow rounded bg-white p-5 CBooking" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" >
                      <div className="row">
                        <div className="col-5">
                        <img className="reviewimage" src={hotelroom}/>
                        </div>
                        <div className="col-6">
                        <h3 className="heads font-weight-bold">The Fern Residency</h3>
                          <p className="format-address">CG Landmark | Bharatpur Heights 44200, Nepal</p>

                          {/* Start Rating */}
                          <div className="rating ratings pb-5">
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
                              {/* End Rating */}

                             <p className="mt-5 roomtype mb-1">Double Room</p>
                             <p className="hotelservices font-weight-bold"> Included Breakfast</p>
                             {/* Show the Confirm Booking */}
                             <p className="hotelservices font-weight-bold confirmbooking"> Confirm Booking</p>
                             <div className="row gs">
                             <div className="sm-6">  <p className="stay">1 night</p></div><div className="sm-6 mr"> <p className="guest">2 adult</p></div>                             
                             </div>
                             <p className="price">NPR 1300</p>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

    </div>
    
    {/* Booking */}
    <div id="menu1" className="container tab-pane fade Booking"><br/>
     
     <div className="shadow rounded bg-white p-5 CBooking CBookings" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" >
                      <div className="row">
                        <div className="col-5">
                        <img className="reviewimage" src={hotelroom}/>
                        </div>
                        <div className="col-6">
                        <h3 className="heads font-weight-bold">The Fern Residency</h3>
                          <p className="format-address">CG Landmark | Bharatpur Heights 44200, Nepal</p>

                          {/* Start Rating */}
                          <div className="rating ratings pb-5">
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
                              {/* End Rating */}

                             <p className="mt-5 roomtype mb-1">Double Room</p>
                             <ul className="services">
                               <li className="serv">Included Breakfast</li>
                               <li className="serv">WIFI</li>
                               <li className="serv">Swimming</li>
                             </ul>
                              {/* Show the Confirm Booking */}
                              <div className="row">
                                <div className="sm-5"><p className="hotelservices font-weight-bold confirmbooking"> Booking</p></div>
                                <div className="sm-6"><button type="button" className="btn btn-info cancel">Cancel</button></div>
                              </div>
                           
                             <div className="row gs">
                             <div className="sm-6">  <p className="stay">1 night</p></div><div className="sm-6 mr"> <p className="guest">2 adult</p></div>                             
                             </div>
                             
                             <p className="price">NPR 1300</p>
                        </div>
                      </div>
                    </div>
      </div>

    {/* Cancallation*/}
    <div id="menu2" className="container tab-pane fade cancellations"><br/>
    <div className="shadow rounded bg-white p-5 CBooking CBookings" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" >
                      <div className="row">
                        <div className="col-5">
                        <img className="reviewimage" src={hotelroom}/>
                        </div>
                        <div className="col-6">
                        <h3 className="heads font-weight-bold">The Fern Residency</h3>
                          <p className="format-address">CG Landmark | Bharatpur Heights 44200, Nepal</p>

                          {/* Start Rating */}
                          <div className="rating ratings pb-5">
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
                              {/* End Rating */}

                             <p className="mt-5 roomtype mb-1">Double Room</p>
                             <ul className="services">
                               <li className="serv">Included Breakfast</li>
                               <li className="serv">WIFI</li>
                               <li className="serv">Swimming</li>
                             </ul>
                              {/* Show the Confirm Booking */}
                              <div className="row mb-3">
                                <div className="sm-5"><p className="hotelservices font-weight-bold confirmbooking"> Cancel</p></div>
                                
                              </div>
                           
                             <div className="row gs">
                             <div className="sm-6">  <p className="stay">1 night</p></div><div className="sm-6 mr"> <p className="guest">2 adult</p></div>                             
                             </div>
                             
                             <p className="price">NPR 1300</p>
                        </div>
                      </div>
                    </div></div>

    {/* My Wallet */}
    <div id="menu3" className="container tab-pane fade"><br/>

                      <div className="container-fluid">
                      <div className="mywallet">
                       <div className="mywalletheader text-center">
                        <h2 className="font34 font-weight-bold mb-4">
                         <span className="mr-3"> <i className="fa fa-dollar"/></span>
                          0
                          </h2>
                          <p className="font14 font-weight-bold">Wallet balance</p>
                       </div>
                       <div className="walletBalanceSection">

                       <div className="row">
                        <div className="col-md-2">
                         <img src={dollaricon} className="dollaricon"/>
                        </div>
                        <div className="col-md-4">
                          <p className="font-weight-bold mt-4">My Cash</p>
                        </div>
                        <div className="col-md-6">
                          <p className="wp font-weight-bold;">
                          <span className="mr-3"> <i className="fa fa-dollar"/></span>
                          0
                          </p>
                          </div>                       
                      </div>

                      <div className="row">
                        <div className="col-md-2">
                         <img src={dollaricon} className="dollaricon"/>
                        </div>
                        <div className="col-md-4">
                          <p className="font-weight-bold mt-4">My Reward</p>
                        </div>
                        <div className="col-md-6">
                          <p className="wp font-weight-bold;">
                          <span className="mr-3"> <i className="fa fa-dollar"/></span>
                          0
                          </p>
                          </div>                       
                      </div>

                    </div>
                    </div>
                    
                      </div>
                   
      </div>
  </div>
</div>
            </div>
        )}}

        export default CustomerDashboard;