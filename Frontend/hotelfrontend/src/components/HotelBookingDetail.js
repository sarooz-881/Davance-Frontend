import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/main.css";
import Footer from "./Footer";
import dollor from "../image/dollars.png";
import { startOfDay } from "date-fns";
import starpng from "../image/star.png";
import bed from "../image/singlebed.jpeg";
import Customerbookingform from "./Customerbookingform";
import Calendar from "./Calendar";
import Roomtoggle from "./Roomtoogle";
class HotelBookingDetail extends Component {
 
    render() {
     
        return(
            <div className="hotelbookingdetail">
                {/* Start Image Slider */}
                <div className="container-fluid mt-5">
<div className="carousel-container position-relative row">  
<div id="myCarousel" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner" style={{height:500}}>
    <div className="carousel-item active" data-slide-number="0">
      <img src="https://source.unsplash.com/Pn6iimgM-wo/1600x900/" className="d-block w-100" alt="..." data-remote="https://source.unsplash.com/Pn6iimgM-wo/" data-type="image" data-toggle="lightbox" data-gallery="example-gallery"/>
    </div>
    <div className="carousel-item" data-slide-number="1">
      <img src="https://source.unsplash.com/tXqVe7oO-go/1600x900/" className="d-block w-100" alt="..." data-remote="https://source.unsplash.com/tXqVe7oO-go/" data-type="image" data-toggle="lightbox" data-gallery="example-gallery"/>
    </div>
    <div className="carousel-item" data-slide-number="2">
      <img src="https://source.unsplash.com/qlYQb7B9vog/1600x900/" className="d-block w-100" alt="..." data-remote="https://source.unsplash.com/qlYQb7B9vog/" data-type="image" data-toggle="lightbox" data-gallery="example-gallery"/>
    </div>
    <div className="carousel-item" data-slide-number="3">
      <img src="https://source.unsplash.com/QfEfkWk1Uhk/1600x900/" className="d-block w-100" alt="..." data-remote="https://source.unsplash.com/QfEfkWk1Uhk/" data-type="image" data-toggle="lightbox" data-gallery="example-gallery"/>
    </div>
    <div className="carousel-item" data-slide-number="4">
      <img src="https://source.unsplash.com/CSIcgaLiFO0/1600x900/" className="d-block w-100" alt="..." data-remote="https://source.unsplash.com/CSIcgaLiFO0/" data-type="image" data-toggle="lightbox" data-gallery="example-gallery"/>
    </div>
    <div className="carousel-item" data-slide-number="5">
      <img src="https://source.unsplash.com/a_xa7RUKzdc/1600x900/" className="d-block w-100" alt="..." data-remote="https://source.unsplash.com/a_xa7RUKzdc/" data-type="image" data-toggle="lightbox" data-gallery="example-gallery"/>
    </div>
    <div className="carousel-item" data-slide-number="6">
      <img src="https://source.unsplash.com/uanoYn1AmPs/1600x900/" className="d-block w-100" alt="..." data-remote="https://source.unsplash.com/uanoYn1AmPs/" data-type="image" data-toggle="lightbox" data-gallery="example-gallery"/>
    </div>
    <div className="carousel-item" data-slide-number="7">
      <img src="https://source.unsplash.com/_snqARKTgoc/1600x900/" className="d-block w-100" alt="..." data-remote="https://source.unsplash.com/_snqARKTgoc/" data-type="image" data-toggle="lightbox" data-gallery="example-gallery"/>
    </div>
    <div className="carousel-item" data-slide-number="8">
      <img src="https://source.unsplash.com/M9F8VR0jEPM/1600x900/" className="d-block w-100" alt="..." data-remote="https://source.unsplash.com/M9F8VR0jEPM/" data-type="image" data-toggle="lightbox" data-gallery="example-gallery"/>
    </div>
    <div className="carousel-item" data-slide-number="9">
      <img src="https://source.unsplash.com/Q1p7bh3SHj8/1600x900/" className="d-block w-100" alt="..." data-remote="https://source.unsplash.com/Q1p7bh3SHj8/" data-type="image" data-toggle="lightbox" data-gallery="example-gallery"/>
    </div>
  </div>
</div>

<div id="carousel-thumbs" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="row mx-0">
        <div id="carousel-selector-0" className="thumb col-4 col-sm-2 px-1 py-2 selected" data-target="#myCarousel" data-slide-to="0">
          <img src="https://source.unsplash.com/Pn6iimgM-wo/600x400/" className="img-fluid" alt="..."/>
        </div>
        <div id="carousel-selector-1" className="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="1">
          <img src="https://source.unsplash.com/tXqVe7oO-go/600x400/" className="img-fluid" alt="..."/>
        </div>
        <div id="carousel-selector-2" className="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="2">
          <img src="https://source.unsplash.com/qlYQb7B9vog/600x400/" className="img-fluid" alt="..."/>
        </div>
        <div id="carousel-selector-3" className="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="3">
          <img src="https://source.unsplash.com/QfEfkWk1Uhk/600x400/" className="img-fluid" alt="..."/>
        </div>
        <div id="carousel-selector-4" className="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="4">
          <img src="https://source.unsplash.com/CSIcgaLiFO0/600x400/" className="img-fluid" alt="..."/>
        </div>
        <div id="carousel-selector-5" className="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="5">
          <img src="https://source.unsplash.com/a_xa7RUKzdc/600x400/" className="img-fluid" alt="..."/>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="row mx-0">
        <div id="carousel-selector-6" className="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="6">
          <img src="https://source.unsplash.com/uanoYn1AmPs/600x400/" className="img-fluid" alt="..."/>
        </div>
        <div id="carousel-selector-7" className="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="7">
          <img src="https://source.unsplash.com/_snqARKTgoc/600x400/" className="img-fluid" alt="..."/>
        </div>
        <div id="carousel-selector-8" className="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="8">
          <img src="https://source.unsplash.com/M9F8VR0jEPM/600x400/" className="img-fluid" alt="..."/>
        </div>
        <div id="carousel-selector-9" className="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="9">
          <img src="https://source.unsplash.com/Q1p7bh3SHj8/600x400/" className="img-fluid" alt="..."/>
        </div>
        <div className="col-2 px-1 py-2"></div>
        <div className="col-2 px-1 py-2"></div>
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carousel-thumbs" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carousel-thumbs" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

</div> 
</div>
{/* End Slider */}
                  
                  <div className="container mt-5">
                    {/* Start Row */}
                  <div className="row">
                    <div className="col-lg-8 col-md-6 infos">
                    <h1 className="font-weight-bold hoteltitle">Hotel Prince Plaza</h1>
                    <p className="address  font-weight-bold">Gyaneshwor, Kathmandu</p>
                    <p className="about">

                    The rooms are fitted with a flat-screen TV with cable channels. You will find a kettle in the room. Each room includes a private bathroom. Extras include slippers and free toiletries.

                    World Peace Pagoda is 1.6 km from Hotel Spring, while International Mountain Museum is 3 km away. Pokhara Airport is 2 km from the property.

                    This is our guests' favourite part of Pokhara, according to independent reviews.

                   Couples particularly like the location — they rated it 9.4 for a two-person trip.

                  We speak your language! 
                    </p>
                    {/* Start Package */}
                    <div className="mt-5 package">
                        <h1 className="font-weight-bold">Our Package</h1>
                       <div className="ser">
                       <span><i className="fa fa-tv"></i><p>TV</p></span>
                        <span><i className="fa fa-wifi"></i><p>Free Wifi</p></span>
                        <span><i className="fa fa-cutlery"></i><p>Kitchen</p></span>
                        <span><i className="fa fa-bed"></i><p>Single Bed</p></span>
                       </div>
                    </div>
                    {/* End Package */}
                      {/* Start Room Type */}
                      <div className="RY mt-5">
                        <span>
                          <h1 className="font-weight-bold">Choose Your Room</h1>
                          
                        </span>
                        <div className="c-gcrtsc">
                          <div className="c-1bdbnnk">
                          <span className="ys">                           
                            <img src={starpng} style={{height:10}}/>                           
                            <span>  <p>Selected Category</p></span>                          
                          </span>
                          </div  >
                          <div className="c-7doipl">
                            <div className="c-ebnjpp">
                                <span className="pp"> 
                                <p className="ty">Classic 2X</p>
                                </span>
                                <span className="sz">
                                  <p>Room Size: 100 sqft </p>
                                </span>
                                <span className="services">
                                 <div className="ic">
                                 <i className="fa fa-tv"></i>
                                   <p>TV</p>
                                 </div>
                                 <div className="ic">
                                 <i className="fa fa-wifi"></i><p>Free Wifi</p>
                                 </div>
                                 <div className="ic">
                                 <i className="fa fa-bed"></i><p>Single Bed</p>
                                 </div>
                                </span>
                            </div>
                            <div className="image">
                              <img src={bed}/>
                            </div>
                          </div>
                          <div className="selected">
                            <div className="price font-weight-bold"><p>NPR 2300</p></div>
                            <button className="sel" type="button">Selected</button>
                          </div>
                        </div>
                      </div>
                      {/* End Room Type */}


                      {/* Start Comment Box */}
                        <div className="commentbox mt-5">
                          <h1 className="font-weight-bold">Ratings & Reviews</h1>

                        <span className="heading">User Rating</span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <p  className="averagereviews">4.1 average based on 254 reviews.</p>
                        <hr className="hrs"/>

                        <div className="row allbars">
                          <div className="side">
                            <div>5 star</div>
                          </div>
                          <div className="middle">
                            <div className="bar-container">
                              <div className="bar-5"></div>
                            </div>
                          </div>
                          <div className="side right">
                            <div>150</div>
                          </div>
                          <div className="side">
                            <div>4 star</div>
                          </div>
                          <div className="middle">
                            <div className="bar-container">
                              <div className="bar-4"></div>
                            </div>
                          </div>
                          <div className="side right">
                            <div>63</div>
                          </div>
                          <div className="side">
                            <div>3 star</div>
                          </div>
                          <div className="middle">
                            <div className="bar-container">
                              <div className="bar-3"></div>
                            </div>
                          </div>
                          <div className="side right">
                            <div>15</div>
                          </div>
                          <div className="side">
                            <div>2 star</div>
                          </div>
                          <div className="middle">
                            <div className="bar-container">
                              <div className="bar-2"></div>
                            </div>
                          </div>
                          <div className="side right">
                            <div>6</div>
                          </div>
                          <div className="side">
                            <div>1 star</div>
                          </div>
                          <div className="middle">
                            <div className="bar-container">
                              <div className="bar-1"></div>
                            </div>
                          </div>
                          <div className="side right">
                            <div>20</div>
                          </div>
                        </div>
                       
                       {/* Start see Comment Box */}
                       <div className="container bootdey">
<div className="col-md-12 bootstrap snippets">
<div className="panel">
  <div className="panel-body">
    <textarea className="form-control" rows="2" placeholder="What are you thinking?"></textarea>
    <div className="mar-top clearfix">
      <button className="btn btn-sm btn-primary pull-right" style={{fontSize:16, borderRadius:8}} type="submit"><i className="fa fa-pencil fa-fw"></i> Share</button>
      <a className="btn btn-trans btn-icon fa fa-video-camera add-tooltip" href="#"></a>
      <a className="btn btn-trans btn-icon fa fa-camera add-tooltip" href="#"></a>
      <a className="btn btn-trans btn-icon fa fa-file add-tooltip" href="#"></a>
    </div>
  </div>
</div>
<div className="panel">
    <div className="panel-body">
    {/* <!-- Newsfeed Content -->
    <!--===================================================--> */}
    <div className="media-block">
      <a className="media-left" href="#"><img className="img-circle img-sm" alt="Profile Picture" src="https://bootdey.com/img/Content/avatar/avatar1.png"/></a>
      <div className="media-body">
        <div className="mar-btm">
          <a href="#" className="btn-link text-semibold media-heading box-inline fs">Lisa D.</a>
          <p className="text-muted text-sm fs fss"><i className="fa fa-mobile fa-lg" ></i> - From Mobile - 11 min ago</p>
        </div>
        <p className="fs">consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
        <div className="pad-ver">
          <div className="btn-group">
            <a className="btn btn-sm btn-default btn-hover-success" href="#"><i className="fa fa-thumbs-up fs"></i></a>
            <a className="btn btn-sm btn-default btn-hover-danger" href="#"><i className="fa fa-thumbs-down fs"></i></a>
          </div>
          <a className="btn btn-sm btn-default fs btn-hover-primary" href="#">Comment</a>
        </div>
        <hr/>
{/* 
        <!-- Comments --> */}
        <div>
          <div className="media-block">
            <a className="media-left" href="#"><img className="img-circle img-sm" alt="Profile Picture" src="https://bootdey.com/img/Content/avatar/avatar2.png"/></a>
            <div className="media-body">
              <div className="mar-btm">
                <a href="#" className="btn-link text-semibold media-heading box-inline fs">Bobby Marz</a>
                <p className="text-muted text-sm fss"><i className="fa fa-mobile fs fa-lg"></i> - From Mobile - 7 min ago</p>
              </div>
              <p className="fs"> Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
              <div className="pad-ver">
                <div className="btn-group">
                  <a className="btn btn-sm btn-default btn-hover-success active" href="#"><i className="fa fa-thumbs-up fs"></i> You Like it</a>
                  <a className="btn btn-sm btn-default btn-hover-danger" href="#"><i className="fa fa-thumbs-down fs" ></i></a>
                </div>
                <a className="btn btn-sm btn-default btn-hover-primary fs " href="#">Comment</a>
              </div>
              <hr/>
            </div>
          </div>

          <div className="media-block">
            <a className="media-left" href="#"><img className="img-circle img-sm" alt="Profile Picture" src="https://bootdey.com/img/Content/avatar/avatar3.png"/>
            </a>
            <div className="media-body">
              <div className="mar-btm">
                <a href="#" className="btn-link text-semibold media-heading box-inline fs">Lucy Moon</a>
                <p className="text-muted text-sm fss"><i className="fa fa-globe fa-lg fs"></i> - From Web - 2 min ago</p>
              </div>
              <p className="fs">Duis autem vel eum iriure dolor in hendrerit in vulputate ?</p>
              <div className="pad-ver">
                <div className="btn-group">
                  <a className="btn btn-sm btn-default btn-hover-success" href="#"><i className="fa fa-thumbs-up"></i></a>
                  <a className="btn btn-sm btn-default btn-hover-danger" href="#"><i className="fa fa-thumbs-down"></i></a>
                </div>
                <a className="btn btn-sm btn-default btn-hover-primary fs" href="#">Comment</a>
              </div>
              <hr/>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!--===================================================-->
    <!-- End Newsfeed Content -->


    <!-- Newsfeed Content -->
    <!--===================================================--> */}
    <div className="media-block pad-all">
      <a className="media-left" href="#"><img className="img-circle img-sm" alt="Profile Picture" src="https://bootdey.com/img/Content/avatar/avatar1.png"/></a>
      <div className="media-body">
        <div className="mar-btm">
          <a href="#" className="btn-link text-semibold media-heading box-inline fs">John Doe</a>
          <p className="text-muted text-sm fs fss"><i className="fa fa-mobile fa-lg"></i> - From Mobile - 11 min ago</p>
        </div>
        <p>Lorem ipsum dolor sit amet.</p>
        <img className="img-responsive thumbnail" src="https://via.placeholder.com/400x300" alt="Image"/>
        <div className="pad-ver">
          <span className="tag tag-sm"><i className="fa fa-heart text-danger fs"></i> 250 Likes</span>
          <div className="btn-group">
            <a className="btn btn-sm btn-default btn-hover-success" href="#"><i className="fa fa-thumbs-up"></i></a>
            <a className="btn btn-sm btn-default btn-hover-danger" href="#"><i className="fa fa-thumbs-down"></i></a>
          </div>
          <a className="btn btn-sm btn-default btn-hover-primary fs" href="#">Comment</a>
        </div>
        <hr/>

        <div>
          <div className="media-block pad-all">
            <a className="media-left" href="#"><img className="img-circle img-sm" alt="Profile Picture" src="https://bootdey.com/img/Content/avatar/avatar2.png"/></a>
            <div className="media-body">
              <div className="mar-btm">
                <a href="#" className="btn-link text-semibold media-heading box-inline fs">Maria Leanz</a>
                <p className="text-muted text-sm fs fss"><i className="fa fa-globe fa-lg"></i> - From Web - 2 min ago</p>
              </div>
              <p>Duis autem vel eum iriure dolor in hendrerit in vulputate ?</p>
              <div>
                <div className="btn-group">
                  <a className="btn btn-sm btn-default btn-hover-success" href="#"><i className="fa fa-thumbs-up"></i></a>
                  <a className="btn btn-sm btn-default btn-hover-danger" href="#"><i className="fa fa-thumbs-down"></i></a>
                </div>
                <a className="btn btn-sm btn-default btn-hover-primary fs" href="#">Comment</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  </div>
</div>
</div>
</div>
                       {/* End See commentBox */}
                        </div>

                      
                      {/* End Comment Box */}

                    </div>
                    <div className="col-lg-4 col-md-6">
                      {/* Book Now */}
                      <div className="booknow">
                        <div className="deal">
                        <p>Now Get to Exclusive Deals</p>
                        </div>

                        <div className="bokinfo">
                            <h1 className="font-weight-bold">NPR 2300</h1>
                            <p className="tax"> Inclusive of all taxes</p>
                            <Calendar/>
                            <Roomtoggle/>
                            {/* Room Type */}
                            <div className="roomtype">
                             <div className="bed">
                             <i className='fas fa-door-closed'></i>
                               <p className="ml-3">Single Bed</p>
                             </div>
                            </div>
                            {/* End Room Type */}
                            {/* Reward System and Total price */}
                            <div className="reward">
                             <img src={dollor} alt="dollor" style={{height:40}}/>
                              <p className="ml-4">Reward</p>
                              <h4>NPR 200</h4>
                            </div>
                            <div className="reward">
                             <img src={dollor} alt="dollor" style={{height:40}}/>
                              <p className="ml-4">Total Price</p>
                              <h4 style={{marginLeft:-42}}>NPR 2100</h4>
                            </div>

                            {/* Reward System and Total Price End */}
                            <Link  to="Customerbookingform">    <button type="button" className="btn btn-success mt-4 cn">Continue to Book</button></Link>
                        </div>
                       
                      </div>
                      {/* End Book Now */}
                      </div>
                </div>
                {/* End Row */}

                  </div>
                  <Footer/>
               
 </div>
           
        )}}
        export default HotelBookingDetail;