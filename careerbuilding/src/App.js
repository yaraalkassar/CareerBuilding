import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.js";
import Home from "./Components/Home/Home";
import Contact from "./Components/ContactUs/Contact";
import About from "./Components/AboutUs/About";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
function App() {
  return (
    <div className="App font-raleway">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/lol">
            <p>{"lol"}</p>
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Join">
            <SignUp />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
