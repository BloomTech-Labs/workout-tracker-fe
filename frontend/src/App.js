import React from "react";
import Signup from "./components/Signup";
import SignOut from "./components/SignOut";
import Login from "./components/Login";
import Features from "./components/Features";
import AboutUs from "./components/AboutUs";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Modal from "./components/Modal";
import "./App.css";
import Graphs from "./components/Profile/Graphs/Graphs";
import Profile from "./components/Profile/Profile"
import FullPageIntroWithFixedNavbar from "./components/FullPageIntroWithFixedNavbar";
import AutocompletePage from "./components/AutoCompletePage";
import Routines from './components/Routines/Routines.js';

function App() {
  return (
    <div className="App">
              <link href="https://fonts.googleapis.com/css?family=Alatsi&display=swap" rel="stylesheet" />
      <Router>
        <Router>
          {/* Nav Bar */}
          <div>
          </div>
          
          <Switch>
            <Route exact path="/" component={FullPageIntroWithFixedNavbar} />
            <Route path="/graphs" exact render={props => <Graphs {...props} />} />
            <Route path="/profile" exact render={props => <Profile {...props} />} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={SignOut} />
            <Route exact path="/features" component={Features} />
            <Route exact path="/aboutus" component={AboutUs} />
          </Switch>
        </Router>
      </Router>
    </div>
  );
}

export default App;