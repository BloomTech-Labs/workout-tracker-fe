import React, { Component } from "react"; 
import ProfileNavbar from './ProfileNavBar'
import MemberProfile from './MemberProfile'
import UserInfo from './UserInfo'
import '../../css/Profile.css'

export default class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
        <ProfileNavbar />
        <MemberProfile />
        <a href='update-user' classname='update-btn'>UpdateProfile</a>
      </div>
    );
  }
}
