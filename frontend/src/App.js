import React from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Modal from "./components/Modal";
import "./App.css";
import Profile from "./components/Profile/Profile";
import FullPageIntroWithFixedNavbar from "./components/FullPageIntroWithFixedNavbar";
import AutocompletePage from "./components/AutoCompletePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Router>
          <Switch>
            <Route exact path="/" component={FullPageIntroWithFixedNavbar} />
            <Route
              path="/profile"
              exact
              render={props => <Profile {...props} />}
            />

            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Router>
      </Router>
    </div>
  );
}

export default App;
