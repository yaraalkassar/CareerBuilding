import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.js";
import ProfileNavbar from "./Components/Navbar/ProfileNavbar";
import Home from "./Components/Home/Home";
import Contact from "./Components/ContactUs/Contact";
import About from "./Components/AboutUs/About";
import Login from "./Components/Login/Login";
import BusinessSignUp from "./Components/SignUp/BusinessSignUp";
import Profile from "./Components/Profile/Profile";
import firebase from "./firebase/firebase";
import Loader from "./Components/loader/loader";
import Vacancies from "./Components/Vacancies/Vacancies";
import VacanciesStudent from "./Components/Vacancies/VacanciesStudent";
import Moredetails3 from "./Components/Vacancies/moredetails3";
import MyVacancies from "./Components/Profile/MyVacancies";
function App() {
  const [userSigned, setUserSigned] = useState(false);
  useEffect(() => {
    firebase.userUpdated(setUserSigned);
  }, []);

  const [firebaseInitialized, setFirebaseInitialized] = useState(false);

  useEffect(() => {
    firebase.isInitialized().then((val) => {
      setFirebaseInitialized(val);
    });
  }, []);

  return firebaseInitialized !== false ? (
    <div className="App font-raleway">
      <Router>
        {userSigned ? <ProfileNavbar /> : <Navbar />}
        <Switch>
          <Route exact path="/MyVacancies">
            <MyVacancies />
          </Route>
          <Route exact path="/PostVacancy">
            <Vacancies />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route exact path="/Vacancy">
            <VacanciesStudent />
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
