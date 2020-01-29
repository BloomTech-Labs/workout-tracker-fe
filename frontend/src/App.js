import React from "react";
import Signup from "./components/Signup";
import LogOut from "./components/LogOut";
import Login from "./components/Login";
import AboutUs from "./components/AboutUs";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./css/App.css";
import Graphs from "./components/Profile/Graphs/Graphs";
import Profile from "./components/Profile/Profile";
import FullPageIntroWithFixedNavbar from "./components/FullPageIntroWithFixedNavbar";
import AutocompletePage from "./components/AutoCompletePage";
import Routines from "./components/Routines/Routines.js";
import RecordRoutine from "./components/Routines/RecordRoutine";
import ProfileOnboarding from './components/Profile/ProfileOnboarding'
import UpdateStats from './components/Profile/UpdateProfile/UpdateStats'
import UpdateUser from './components/Profile/UpdateProfile/UpdateUser'

function App() {
  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
        rel="stylesheet"
      />
      <Router>
        <Router>
          {/* Nav Bar */}
          <div></div>

          <Switch>
            <Route exact path="/" component={FullPageIntroWithFixedNavbar} />
            <Route
              path="/graphs"
              exact
              render={props => <Graphs {...props} />}
            />
            <Route
              path="/profile"
              exact
              render={props => <Profile {...props} />}
            />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path='/onboarding' component={ProfileOnboarding} />
            <Route exact path="/logout" component={LogOut} />
            <Route exact path="/aboutus" component={AboutUs} />
            <Route exact path="/routine" component={RecordRoutine} />
            <Route exact path='/update-status' component={UpdateStats} />
            <Route exact path='/update-user' component={UpdateUser} />
          </Switch>
        </Router>
      </Router>
    </div>
  );
}

export default App;
