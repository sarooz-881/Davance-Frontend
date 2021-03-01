import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Admindashboard from "./components/Admindashboard";
import Booking from "./components/Booking";
import Users from "./components/Users";
import HotelRegister from "./components/HotelRegister";
import Profile from "./components/Profile";
import HotelDashboard from "./components/HotelDashboard";
import HotelBooking from "./components/HotelBooking";
import HotelInformation from "./components/HotelInformation";
import HotelPackage from "./components/HotelPackage";
import Hotelprofile from "./components/Hotelprofile";
import Gallery from "./components/Gallery";
import RoomType from "./components/RoomType";
import GeoLocation from "./components/GeoLocation";
import Roomtypeform from "./components/Roomtypeform";
import CustomerDashboard from "./components/CustomerDashboard";
import backgroundimages from "./image/bg-agoda-homepage.png";
import { enGB } from "date-fns/locale";
import { DateRangePicker, START_DATE, END_DATE } from "react-nice-dates";
import "react-nice-dates/build/style.css";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import prince from "./image/prince.jpg";
import tayoma from "./image/IMG_9146_sm.jpg";
import Manaslu from "./image/Hotel-Mechi-Crown.jpg";
import manasu from "./image/manasu.jpg";
import Milarepa from "./image/IMG_9033-700x400.jpg";
import Romantica from "./image/images.jpeg";
import royalcentury from "./image/royalcentury.jpeg";
import barahi from "./image/barahi.jpg";
import HotelBookingDetail from "./components/HotelBookingDetail";
import Footer from "./components/Footer";
import Customerbookingform from "./components/Customerbookingform";
import Axios from "axios";
import GoogleMaps from "./components/GoogleMaps";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/Signup" exact component={Signup}></Route>
          <Route path="/Signin" exact component={Signin}></Route>

          {/* Admin Dashboard */}
          <Route
            path="/Admindashboard"
            exact
            component={Admindashboard}
          ></Route>
          <Route path="/Booking" exact component={Booking}></Route>
          <Route path="/Users" exact component={Users}></Route>
          <Route path="/Register" exact component={HotelRegister}></Route>
          <Route path="/Profile" exact component={Profile}></Route>

          {/* Hotel Dashboard */}
          <Route
            path="/HotelDashboard"
            exact
            component={HotelDashboard}
          ></Route>
          <Route path="/Booking" exact component={HotelBooking}></Route>
          <Route
            path="/HotelInformation"
            exact
            component={HotelInformation}
          ></Route>
          <Route path="/HotelPackage" exact component={HotelPackage}></Route>
          <Route path="/Hotelprofile" exact component={Hotelprofile}></Route>
          <Route path="/Gallery" exact component={Gallery}></Route>
          <Route path="/RoomType" exact component={RoomType}></Route>
          <Route path="/GeoLocation" exact component={GeoLocation}></Route>
          <Route path="/RoomTypeForm" exact component={Roomtypeform}></Route>
          <Route path="/googleMaps" exact component={GoogleMaps}></Route>
          {/* CustomerDashboard */}
          <Route
            path="/CustomerDashboard"
            exact
            component={CustomerDashboard}
          ></Route>

          {/* Hotel Booking Detail */}
          <Route
            path="/HotelBookingDetail"
            exact
            component={HotelBookingDetail}
          ></Route>
          <Route
            path="/Customerbookingform"
            exact
            component={Customerbookingform}
          ></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const Home = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const [searchText, setSearchText] = useState("");

  const toggle = () => setIsOpen(!isOpen);

  const [hotelList, setHotelList] = useState([]);
  const [originalHotelList, setOriginalHotelList] = useState([]);

  const searchHotel = (e) => {
    e.preventDefault();
    alert("searching Hotel " + searchText);
    console.log(originalHotelList)
    if (searchText == null || searchText === "") {
      setHotelList(originalHotelList)
    } else{
      const filterData = originalHotelList.filter((item) => {
        if (item.hotelName.toLowerCase().includes(searchText.toLowerCase())) {
          return item;
        } else if (
          item.address.state.toLowerCase().includes(searchText.toLowerCase())
        ) {
          return item;
        }
      });
      setHotelList(filterData);
    }
  };
  useEffect(() => {
    const config = {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    };
    Axios.get("http://localhost:3005/ehotel/hotel/hotelList", config)
      .then((res) => {
        console.log(res.data);
        setHotelList(res.data);
        setOriginalHotelList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="homepage">
      <div className="welcomemessage container">
        <h1 className="font-weight-bold mb-4 mt-0 ">Hotel</h1>
        <h2>Get the best on prices 2,000,000+ properties, worldwide</h2>
      </div>
      <div className="container con">
        <div className="hotelsearch">
          {/* Search Destination */}
          <div className="searchbox iconbox">
            <i class="fa fa-search" />
            <div className="inputs">
              <input
                type="text"
                placeholder="Enter a destination"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>
          </div>

          <div className="row">
            {/* Calendar */}
            <div className="col-lg-8 col-md-8">
              <div className="checkdate">
                <DateRangePicker
                  startDate={startDate}
                  endDate={endDate}
                  onStartDateChange={setStartDate}
                  onEndDateChange={setEndDate}
                  minimumDate={new Date()}
                  minimumLength={1}
                  format="dd MMM yyyy"
                  locale={enGB}
                >
                  {({ startDateInputProps, endDateInputProps, focus }) => (
                    <div className="date-range">
                      <input
                        className={
                          "input" + (focus === START_DATE ? " -focused" : "")
                        }
                        {...startDateInputProps}
                        placeholder="Start date"
                      />
                      <span className="date-range_arrow" />
                      <input
                        className={
                          "input" + (focus === END_DATE ? " -focused" : "")
                        }
                        {...endDateInputProps}
                        placeholder="End date"
                      />
                    </div>
                  )}
                </DateRangePicker>
              </div>
            </div>

            {/* Room Guest */}
            <div className="col-lg-4 col-md-4">
              <div className="guest">
                <Button
                  color="primary"
                  onClick={toggle}
                  style={{ marginBottom: "1rem" }}
                >
                  <div className="row">
                    <div className="col-sm-4">
                      {" "}
                      <i className="material-icons">people_outline</i>
                    </div>
                    <div className="col-sm-4">
                      {" "}
                      <div className="sr">
                        <div className="row">
                          <div className="sm-4">
                            <span>1</span>
                          </div>
                          <div className="sm-4 ml-2">
                            <p>Adult</p>
                          </div>
                        </div>
                        <div className="row fon">
                          <div className="sm-4">
                            <span>1</span>
                          </div>
                          <div className="sm-4 ml-2">
                            <p>Room</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4 down">
                      <i className="fas fa-chevron-down"></i>
                    </div>
                  </div>
                </Button>
                <Collapse isOpen={isOpen}>
                  <Card>
                    <CardBody>
                      <div className="row">
                        <div className="md-4 roo">
                          <span className="ml-3 font-weight-bold">Room</span>
                        </div>
                        <div className="md-4" style={{ marginLeft: "-9px" }}>
                          <input type="submit" value="-" className="minus" />
                          <span className="ml-3 counter">1</span>
                          <input type="submit" value="+" className="plus" />
                        </div>
                      </div>
                      <div className="row mt-4">
                        <div className="md-4 roo mr-2">
                          <span className="ml-3 font-weight-bold">Adult</span>
                        </div>
                        <div className="md-4" style={{ marginLeft: "-9px" }}>
                          <input type="submit" value="-" className="minus" />
                          <span className="ml-3 counter">1</span>
                          <input type="submit" value="+" className="plus" />
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Collapse>
              </div>
            </div>
          </div>
        </div>
        {/* Search Button */}
        <div className="searchbutton">
          <button className="searchs" onClick={searchHotel}>
            Search
          </button>
        </div>
      </div>

      {/* Hotels  Trending Now*/}
      <div className="container mt-5 hotelsall">
        <h1 className="font-weight-bold mb-4">Trending Now</h1>
        <div className="card-deck">
          <div className="card">
            <img className="card-img-top" src={prince} alt="Card image cap" />
            <div className="card-body">
              <Link to="HotelBookingDetail">
                {" "}
                <h3 className="card-title ">Hotel Prince Plaza</h3>
              </Link>
              <Link to="HotelBookingDetail">
                {" "}
                <p className="card-text">Gyaneshwor, Kathmandu</p>
              </Link>
              {/* Start Rating */}
              <div className="rating MR ">
                <input type="radio" name="star" id="star1" />
                <label for="star1"></label>
                <input type="radio" name="star" id="star2" />
                <label for="star2"></label>
                <input type="radio" name="star" id="star3" />
                <label for="star3"></label>
                <input type="radio" name="star" id="star4" />
                <label for="star4"></label>
                <input type="radio" name="star" id="star5" />
                <label for="star5"></label>
              </div>
              <p className="card-price">NPR 9,051</p>
              <p className="card-infos">
                <small className="text-muted">Per Room Per Night</small>
              </p>
              <p className="card-text">
                <small className="text-muted FC">
                  <i className="fa fa-check"></i>
                  <span className="ml-2">Free Cancallation</span>
                </small>
              </p>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src={tayoma} alt="Card image cap" />
            <div className="card-body">
              <Link to="HotelBookingDetail">
                {" "}
                <h3 className="card-title">Hotel Tayoma</h3>
              </Link>
              <Link to="HotelBookingDetail">
                {" "}
                <p className="card-text">Near J P Road, Thamel, Kathmandu</p>
              </Link>
              {/* Start Rating */}
              <div className="rating MR MR1">
                <input type="radio" name="star" id="star1" />
                <label for="star1"></label>
                <input type="radio" name="star" id="star2" />
                <label for="star2"></label>
                <input type="radio" name="star" id="star3" />
                <label for="star3"></label>
                <input type="radio" name="star" id="star4" />
                <label for="star4"></label>
                <input type="radio" name="star" id="star5" />
                <label for="star5"></label>
              </div>
              <p className="card-price">NPR 10,000</p>
              <p className="card-infos">
                <small className="text-muted">Per Room Per Night</small>
              </p>
              <p className="card-text">
                <small className="text-muted FC">
                  <i className="fa fa-check"></i>
                  <span className="ml-2">Free Cancallation</span>
                </small>
              </p>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src={manasu} alt="Card image cap" />
            <div className="card-body">
              <Link to="HotelBookingDetail">
                {" "}
                <h3 className="card-title">Hotel Manaslu</h3>
              </Link>
              <Link to="HotelBookingDetail">
                {" "}
                <p className="card-text">Lakeside, Pokhara</p>
              </Link>
              {/* Start Rating */}
              <div className="rating MR ">
                <input type="radio" name="star" id="star1" />
                <label for="star1"></label>
                <input type="radio" name="star" id="star2" />
                <label for="star2"></label>
                <input type="radio" name="star" id="star3" />
                <label for="star3"></label>
                <input type="radio" name="star" id="star4" />
                <label for="star4"></label>
                <input type="radio" name="star" id="star5" />
                <label for="star5"></label>
              </div>
              <p className="card-price">NPR 7,999</p>
              <p className="card-infos">
                <small className="text-muted">Per Room Per Night</small>
              </p>
              <p className="card-text">
                <small className="text-muted FC">
                  <i className="fa fa-check"></i>
                  <span className="ml-2">Free Cancallation</span>
                </small>
              </p>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src={Manaslu} alt="Card image cap" />
            <div className="card-body">
              <Link to="HotelBookingDetail">
                {" "}
                <h3 className="card-title">Hotel Travel INN</h3>
              </Link>
              <Link to="HotelBookingDetail">
                {" "}
                <p className="card-text">Near Gaushala Chowk, Kathmandu</p>
              </Link>
              {/* Start Rating */}
              <div className="rating MR PR ">
                <input type="radio" name="star" id="star1" />
                <label for="star1"></label>
                <input type="radio" name="star" id="star2" />
                <label for="star2"></label>
                <input type="radio" name="star" id="star3" />
                <label for="star3"></label>
                <input type="radio" name="star" id="star4" />
                <label for="star4"></label>
                <input type="radio" name="star" id="star5" />
                <label for="star5"></label>
              </div>
              <p className="card-price">NPR 6,000</p>
              <p className="card-infos">
                <small className="text-muted">Per Room Per Night</small>
              </p>
              <p className="card-text">
                <small className="text-muted FC">
                  <i className="fa fa-check"></i>
                  <span className="ml-2">Free Cancallation</span>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hotels Recommended*/}
      <div className="container mt-5 hotelsall">
        <h1 className="font-weight-bold mb-4">Hotel Recommended</h1>
        <div className="card-deck">
          <div className="card">
            <img className="card-img-top" src={Milarepa} />
            <div className="card-body">
              <Link to="HotelBookingDetail">
                {" "}
                <h3 className="card-title ">Hotel Milarepa</h3>
              </Link>
              <Link to="HotelBookingDetail">
                {" "}
                <p className="card-text">Thamel, Kathmandu</p>
              </Link>
              {/* Start Rating */}
              <div className="rating MR ">
                <input type="radio" name="star" id="star1" />
                <label for="star1"></label>
                <input type="radio" name="star" id="star2" />
                <label for="star2"></label>
                <input type="radio" name="star" id="star3" />
                <label for="star3"></label>
                <input type="radio" name="star" id="star4" />
                <label for="star4"></label>
                <input type="radio" name="star" id="star5" />
                <label for="star5"></label>
              </div>
              <p className="card-price">NPR 11,000</p>
              <p className="card-infos">
                <small className="text-muted">Per Room Per Night</small>
              </p>
              <p className="card-text">
                <small className="text-muted FC">
                  <i className="fa fa-check"></i>
                  <span className="ml-2">Free Cancallation</span>
                </small>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              className="card-img-top"
              src={Romantica}
              alt="Card image cap"
            />
            <div className="card-body">
              <Link to="HotelBookingDetail">
                {" "}
                <h3 className="card-title">Hotel Romantica</h3>
              </Link>
              <Link to="HotelBookingDetail">
                {" "}
                <p className="card-text">Pokhara, Lakeside, Pokhara</p>
              </Link>
              {/* Start Rating */}
              <div className="rating MR ">
                <input type="radio" name="star" id="star1" />
                <label for="star1"></label>
                <input type="radio" name="star" id="star2" />
                <label for="star2"></label>
                <input type="radio" name="star" id="star3" />
                <label for="star3"></label>
                <input type="radio" name="star" id="star4" />
                <label for="star4"></label>
                <input type="radio" name="star" id="star5" />
                <label for="star5"></label>
              </div>
              <p className="card-price">NPR 9,350</p>
              <p className="card-infos">
                <small className="text-muted">Per Room Per Night</small>
              </p>
              <p className="card-text">
                <small className="text-muted FC">
                  <i className="fa fa-check"></i>
                  <span className="ml-2">Free Cancallation</span>
                </small>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              className="card-img-top"
              src={royalcentury}
              alt="Card image cap"
            />
            <div className="card-body">
              <Link to="HotelBookingDetail">
                {" "}
                <h3 className="card-title">Royal Century</h3>
              </Link>
              <Link to="HotelBookingDetail">
                {" "}
                <p className="card-text">Shahid Chowk, Chitwan</p>
              </Link>
              {/* Start Rating */}
              <div className="rating MR ">
                <input type="radio" name="star" id="star1" />
                <label for="star1"></label>
                <input type="radio" name="star" id="star2" />
                <label for="star2"></label>
                <input type="radio" name="star" id="star3" />
                <label for="star3"></label>
                <input type="radio" name="star" id="star4" />
                <label for="star4"></label>
                <input type="radio" name="star" id="star5" />
                <label for="star5"></label>
              </div>
              <p className="card-price">NPR 2,500</p>
              <p className="card-infos">
                <small className="text-muted">Per Room Per Night</small>
              </p>
              <p className="card-text">
                <small className="text-muted FC">
                  <i className="fa fa-check"></i>
                  <span className="ml-2">Free Cancallation</span>
                </small>
              </p>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src={barahi} alt="barahi" />
            <div className="card-body">
              <Link to="HotelBookingDetail">
                {" "}
                <h3 className="card-title">Hotel Showland</h3>
              </Link>
              <Link to="HotelBookingDetail">
                {" "}
                <p className="card-text">Lakside, Barahi Chowkm Pokhara</p>
              </Link>
              {/* Start Rating */}
              <div className="rating MR PR ">
                <input type="radio" name="star" id="star1" />
                <label for="star1"></label>
                <input type="radio" name="star" id="star2" />
                <label for="star2"></label>
                <input type="radio" name="star" id="star3" />
                <label for="star3"></label>
                <input type="radio" name="star" id="star4" />
                <label for="star4"></label>
                <input type="radio" name="star" id="star5" />
                <label for="star5"></label>
              </div>
              <p className="card-price">NPR 3,000</p>
              <p className="card-infos">
                <small className="text-muted">Per Room Per Night</small>
              </p>
              <p className="card-text">
                <small className="text-muted FC">
                  <i className="fa fa-check"></i>
                  <span className="ml-2">Free Cancallation</span>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      {/* search hotel List */}
      {hotelList.map((item) => {
        return (
          <div className="fsh container mt-5" key={item._id}>
            <div className="searchhotel">
              <div className="row">
                <div className="col-lg-5 col-sm-5">
                  <img className="image" src={barahi} />
                </div>
                <div className="col-lg-6 col-sm-6">
                  <h3 className="mt-3 font-weight-bold">{item.hotelName}</h3>
                  <p className="address">{item.address.street}, {item.address.state}</p>
                  <div className="rating MR MR1 MR2">
                    <input type="radio" name="star" id="star1" />
                    <label for="star1"></label>
                    <input type="radio" name="star" id="star2" />
                    <label for="star2"></label>
                    <input type="radio" name="star" id="star3" />
                    <label for="star3"></label>
                    <input type="radio" name="star" id="star4" />
                    <label for="star4"></label>
                    <input type="radio" name="star" id="star5" />
                    <label for="star5"></label>
                  </div>
                  <div className="service">
                    <span>
                      <i className="fa fa-wifi" />
                      <p>WIFI</p>
                    </span>
                    <span>
                      <i className="fa fa-automobile" />
                      <p>Free Parking</p>
                    </span>
                    <span>
                      <i class="fas fa-swimmer" />
                      <p>Swimming Pool</p>
                    </span>
                  </div>
                  <div className="row infos">
                    <div className="col-lg-6 col-sm-6">
                      <p className="roomtype">Deluxe(3X)</p>
                      <h2 className="price">NPR 1920</h2>
                      <p className="prpn">Per Room Per Night</p>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <Link
                        to={{
                          pathname: "HotelBookingDetail",
                          search: "?query=abc",
                          state: [item._id],
                        }}
                      >
                        {" "}
                        <button className="det" type="submit">
                          Detail
                        </button>
                      </Link>
                      <div>
                        {item.latitude ? (
                          <Link
                            to={{
                              pathname: "googleMaps",
                              search: "?query=abc",
                              state: [
                                { lat: item.latitude, lng: item.longitude, name: item.hotelName },
                              ],
                            }}
                          >
                            {" "}
                            <button className="det" type="submit">
                              Map
                            </button>
                          </Link>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <Footer />
    </div>
  );
};
export default App;
