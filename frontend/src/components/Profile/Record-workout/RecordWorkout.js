import React, { Component } from "react"; 
import "../../../css/Profile.css";
import ProfileNavbar from '../ProfileNavBar'

export default class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
        <ProfileNavbar />
      </div>
    );
  }
}
