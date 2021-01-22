import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.js";
import Home from "./Components/Home/Home";
import Contact from "./Components/ContactUs/Contact";
import About from "./Components/AboutUs/About";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";

import firebase from "./firebase/firebase";
import Loader from "./Components/loader/loader";
import Vacancies from "./Components/Vacancies/vacancies";

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
          <Route path="/Vacancy">
            <Vacancies />
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
          <Route exact path="/Home">
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
