import React from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Features from "./components/Features";
import AboutUs from "./components/AboutUs";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Modal from "./components/Modal";
import "./App.css";
import Graphs from "./components/Profile/Graphs/Graphs";
import FullPageIntroWithFixedNavbar from "./components/FullPageIntroWithFixedNavbar";
import AutocompletePage from "./components/AutoCompletePage";
<<<<<<< HEAD


=======
>>>>>>> 06c008c47270025e101f5c45bd58097e0c9b0c2e
import Routines from './components/Routines/Routines.js';
import MoreInfo from "./components/Profile/MoreProfileInfo"

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
            <Route
              path="/graphs"
              exact
              render={props => <Graphs {...props} />}
            />
            <Route path="/profile-info" component={MoreInfo} />
            </Switch>
        {/*Routines*/}
        {/* <Route path='/routines' exact render={(props) => <Routines {...props} />}/> */}
        <Routines />

       
        
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
<<<<<<< HEAD

            

            {/*Routines*/}
            <Routines />

            {/* Footer */}
            <div className='footer'>
            </div>

            
          
          </Router>
=======
            <Route exact path="/features" component={Features} />
            <Route exact path="/aboutus" component={AboutUs} />
          </Switch>
>>>>>>> e8d784ef038b4cf7797fa0ad391a3a3d98e2786a
        </Router>
    </div>
  );
}

export default App;
