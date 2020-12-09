import React from "react";
import { BrowserRouter, Switch, Route, Link} from "react-router-dom";

import Navbar from './components/Navbar';
import Signup from "./components/Signup";
import Signin from "./components/Signin";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar/>
    <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/Signup" exact component={Signup}></Route>
          <Route path="/Signin" exact component={Signin}></Route>
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
