import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.js";
import Home from "./Components/Home/Home";
import Contact from "./Components/ContactUs/Contact";
import About from "./Components/AboutUs/About";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import BusinessSignUp from "./Components/SignUp/BusinessSignUp";
import Profile from "./Components/Profile/Profile";
import firebase from "./firebase/firebase";
import Loader from "./Components/loader/loader";
import Vacancies from "./Components/Vacancies/vacancies";
import Vacanciesstudent from "./Components/Vacancies/vacanciesstudent";
import Moredetails from "./Components/Vacancies/moredetails";
import Moredetails2 from "./Components/Vacancies/moredetails2";
import Moredetails3 from "./Components/Vacancies/moredetails3";

function App() {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);

  useEffect(() => {
    firebase.isInitialized().then((val) => {
      setFirebaseInitialized(val);
    });
  }, []);

  return firebaseInitialized !== false ? (
    <div className="App font-raleway">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/Vacancy">
            <Vacancies />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route exact path="/Vacancy1">
            <Vacanciesstudent />
          </Route>
          <Route exact path="/moredetails">
            <Moredetails />
          </Route>
          <Route exact path="/moredetails2">
            <Moredetails2 />
          </Route>
          <Route exact path="/moredetails3">
            <Moredetails3 />
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
          <Route path="/Join/Join-Business">
            <BusinessSignUp />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  ) : (
    <Loader />
  );
}

export default App;
