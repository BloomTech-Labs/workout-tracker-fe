import React, { Component } from "react"; 
import UserInfo from "../UserInfo.js";
import ProgressGraph from "./ProgressGraph.js";
import CaloriesGraph from "./CaloriesGraph.js";
import MuscleWorked from "./MuscleWorked";
import ProfileNavbar from '../ProfileNavBar'
import "../../../css/Profile.css"

export default class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
        <ProfileNavbar />
        <ProgressGraph />
        <CaloriesGraph />
        <MuscleWorked />
      </div>
    );
  }
}
