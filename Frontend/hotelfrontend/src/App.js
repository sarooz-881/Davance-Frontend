import React from "react";
import { BrowserRouter, Switch, Route, Link} from "react-router-dom";

import Navbar from './components/Navbar';
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Admindashboard from "./components/Admindashboard";
import Booking from "./components/Booking";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar/>
    <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/Signup" exact component={Signup}></Route>
          <Route path="/Signin" exact component={Signin}></Route>
          <Route path="/Admindashboard" exact component={Admindashboard}></Route>
          <Route path="/Booking" exact component={Booking}></Route>

          </Switch>
    </div>
    </BrowserRouter>
  );
}

const Home = () => {
  return (
    <div></div>

  )
}
export default App;
