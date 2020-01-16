import React from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Features from "./components/Features";
import AboutUs from "./components/AboutUs";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Modal from "./components/Modal";
import "./App.css";
import Profile from "./components/Profile/Profile";
import FullPageIntroWithFixedNavbar from "./components/FullPageIntroWithFixedNavbar";
import AutocompletePage from "./components/AutoCompletePage";
import Routines from './components/Routines/Routines.js';
import NavBar from './components/Navbar';
import ProfileNavbar from './components/Profile/ProfileNavBar'

function App() {
  return (
    <div className="App">
              <link href="https://fonts.googleapis.com/css?family=Alatsi&display=swap" rel="stylesheet" />
      <Router>
        <Router>
          {/* Nav Bar */}

          <ProfileNavbar />
          
          <Switch>
          <Route exact path="/" component={FullPageIntroWithFixedNavbar} />
          <Route
          path="/profile"
          exact
          render={props => <Profile {...props} />}
          />
          
          <NavBar/>
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/features" component={Features} />
            <Route exact path="/aboutus" component={AboutUs} />
          </Switch>
        </Router>
      </Router>
    </div>
  );
}

export default App;
