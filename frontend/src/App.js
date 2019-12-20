import React from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Modal from "./components/Modal";
import "./App.css";
import Profile from "./components/Profile/Profile";
import FullPageIntroWithFixedNavbar from "./components/FullPageIntroWithFixedNavbar";
import AutocompletePage from "./components/AutoCompletePage";

import Profile from './components/Profile/Profile.js';
import Routines from './components/Routines/Routines.js';


class App extends React.Component {
  render() {
    return (
      
      
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Alatsi&display=swap" rel="stylesheet"></link>
        <Router>
        <Switch>
        {/* Nav Bar */}
          <nav className='top-nav'>
            <a href='/'>
              <div className='logo'></div>
            </a>
            <h1>First Rep</h1>
            <a href='/'>Home</a>
            <a href='/routines'>Routines</a>
            <a href='/profile'>Profile</a>
          </nav>

        {/*Profile*/}
        {/* <Route path='/profile/:id' exact render={(props) => <Profile {...props} />}/> */}
        <Route path='/profile' exact render={(props) => <Profile />}/>

        {/*Routines*/}
        {/* <Route path='/routines' exact render={(props) => <Routines {...props} />}/> */}
        <Routines />

        {/* Footer */}
        <div className='footer'>
        </div>
        
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Router>
    </div>
  );
}
}
