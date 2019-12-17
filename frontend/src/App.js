import React from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Modal from "./components/Modal";
import "./App.css";
import Profile from "./components/Profile/Profile";
import FullPageIntroWithFixedNavbar from "./components/FullPageIntroWithFixedNavbar";
import AutocompletePage from "./components/AutoCompletePage";
import Routines from './components/Routines/Routines.js';

function App() {
  return (
    <div className="App">
              <link href="https://fonts.googleapis.com/css?family=Alatsi&display=swap" rel="stylesheet" />
      <Router>
        <Router>
          <Switch>
            <Route exact path="/" component={FullPageIntroWithFixedNavbar} />
            <Route
              path="/profile"
              exact
              render={props => <Profile {...props} />}
            />
            {/* Nav Bar */}
            <nav className='top-nav'>
              <a href='/'>
                <div className='logo' />
              </a>
              <h1>First Rep</h1>
              <a href='/'>Home</a>
              <a href='/routines'>Routines</a>
              <a href='/profile'>Profile</a>
            </nav>

            {/*Routines*/}
            <Routines />

            {/* Footer */}
            <div className='footer'>
            </div>

            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Router>
      </Router>
    </div>
  );
}

export default App;
