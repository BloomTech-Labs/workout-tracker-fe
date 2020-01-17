import React, { Component } from "react";
import "./Profile.css";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import UserInfo from "./UserInfo.js";
import ProgressGraph from "./ProgressGraph.js";
import CaloriesGraph from "./CaloriesGraph.js";


export default class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
        <UserInfo />
        <ProgressGraph />
        <CaloriesGraph />
        
      </div>
    );
  }
}
