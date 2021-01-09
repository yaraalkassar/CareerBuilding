import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/nav">
            <Navbar />
          </Route>
          <Route path="/">
            <p>{"home"}</p>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
