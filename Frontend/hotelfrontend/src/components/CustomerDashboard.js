import React, { Component}from "react";
import "../css/main.css";
import hotelroom from "../image/hotelroom.jpeg"


class  CustomerDashboard extends Component {
  
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

                    <a className="nav-link mb-3 p-3 shadow" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                        <i className="fa fa-calendar-minus-o mr-2"></i>
                        <span className="font-weight-bold small text-uppercase">Bookings</span></a>

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
                                              <p>  </p>
                                           
                           </div>
                        </div>
                       <hr/>
                        <div className="row">
                          <div className="col-sm-3 col-md-2 col-5">
                            <label>First Name</label>
                         
                          </div>
                          <div className="col-md-8 col-6">
                                       <p> </p>
                                     
                           </div>
                        </div>
                        <hr/>
                        <div className="row">
                          <div className="col-sm-3 col-md-2 col-5">
                            <label>Last Name</label>
                          </div>
                          <div className="col-md-8 col-6">
                                           <p>  </p>
                                          
                           </div>                          
                        </div>
                        <hr/>
                        <div className="row">
                          <div className="col-sm-3 col-md-2 col-5">
                            <label>Email</label>
                          </div>
                          <div className="col-md-8 col-6">
                                           <p> </p>
                           </div>
                        </div>
                        <hr/>
                        <div className="row">
                          <div className="col-sm-3 col-md-2 col-5">
                            <label>Role</label>
                           
                          </div>
                          <div className="col-md-8 col-6">
                                            <p>  </p>
                                           
                           </div>
                        </div>
                        <hr/>
                    </div>
                    

                    
                    <div className="tab-pane fade shadow rounded bg-white p-5" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                        <h4 className="font-italic mb-4">Bookings</h4>
                        <p className="font-italic text-muted mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    
                    {/* Cancellation */}
                    <div className="tab-pane fade shadow rounded bg-white p-5" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                       <div className="row">
                       <div className="col-5">
                        <img className="cancallation" src={hotelroom}/>
                        </div>

                        <div className="col-6">
                          <h3 className="heads font-weight-bold">The Fern Residency</h3>
                          <p className="format-address">CG Landmark | Bharatpur Heights 44200, Nepal</p>
                          
                         </div>
                       </div>
                        </div>
                    
                    {/* Confirm Booking */}
                    <div className="tab-pane fade shadow rounded bg-white p-5" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                        <h4 className="font-italic mb-4">Confirm booking</h4>
                        <p className="font-italic text-muted mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

    </div>
    
    {/* Booking */}
    <div id="menu1" className="container tab-pane fade"><br/>
      <h3>Menu 1</h3>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>

    {/* Reviews */}
    <div id="menu2" className="container tab-pane fade"><br/>
      <h3>Menu 2</h3>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
    </div>

    {/* My Wallet */}
    <div id="menu3" className="container tab-pane fade"><br/>
      <h3>Menu 3</h3>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
    </div>
  </div>
</div>
            </div>
        )}}

        export default CustomerDashboard;