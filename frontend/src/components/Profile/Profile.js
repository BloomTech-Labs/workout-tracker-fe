import React, { Component } from "react";
import "./Profile.css";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import UserInfo from "./UserInfo.js";
import ProgressGraph from "./ProgressGraph.js";
import CaloriesGraph from "./CaloriesGraph.js";
import CollapsePage from './CollapsePage.js'
import WorkoutCounterForm from './WorkoutCounterForm.js'
import Onboard from './ProfileOnboarding.js'


export default class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
        <Route exact path="/onboarding" component={Onboard} />
        <UserInfo />
        <Route exact path="/records" component={CollapsePage} />
        <Route exact path="/records" component={WorkoutCounterForm} /> 
        <ProgressGraph />
        <CaloriesGraph />
        
      </div>
    );
  }
}
