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
import Routines from "./components/Routines/Routines.js";
import AddRoutine from "./components/Routines/AddRoutine";
import AddId from "./components/Routines/AddId";
import ExerciseRecords from "./components/Profile/Record-workout/ExerciseRecords";
import RoutineRecords from "./components/Profile/Record-workout/RoutineRecords";
import AddExercise from "./components/Routines/SearchBar";
import DisplayRoutines from "./components/Routines/DisplayRoutines";
import FriendList from "./components/Routines/FriendList";
import SearchBar from "./components/Routines/SearchBar";
import RecordRoutine from "./components/Routines/RecordRoutine";
import ProfileOnboarding from './components/Profile/ProfileOnboarding'
import UpdateStats from './components/Profile/UpdateProfile/UpdateStats'
import UpdateUser from './components/Profile/UpdateProfile/UpdateUser'
import UserInfo from "./components/Profile/UserInfo";

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
            <Route
              path="/profile-info"
              exact
              component= {UserInfo}
            />
            <Route
              path="/profile-onboarding"
              exact
              component= {ProfileOnboarding}
            />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path='/onboarding' component={ProfileOnboarding} />
            <Route exact path="/logout" component={LogOut} />
            <Route exact path="/aboutus" component={AboutUs} />
            <Route exact path="/add-routine" component={AddRoutine} />
            <Route exact path="/add-id" component={AddId} />
            <Route exact path="/exercise-records" component={ExerciseRecords} />
            <Route exact path="/routine-records" component={RoutineRecords} />
            <Route exact path="/add-exercise/:id" component={SearchBar} />
            <Route exact path="/display-routine" component={DisplayRoutines} />
            <Route exact path="/form" component={FriendList} />
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
