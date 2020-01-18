import React, { Component } from "react"; 
import "./Profile.css";
import ProfileNavbar from './ProfileNavBar'
import MemberProfile from './MemberProfile'
import UserInfo from './UserInfo'

export default class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
        <ProfileNavbar />
        <UserInfo />
      </div>
    );
  }
}
