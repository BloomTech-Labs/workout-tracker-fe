import React, { Component } from "react";
import { logOut } from "../actions/index";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import SignupStyle from "../styles/index";
import ProfileNavBar from "../components/Profile/ProfileNavBar";

class LogOut extends Component {
  state = {
    navigate: false,
  };

  logOut = () => {
    localStorage.clear("token");
    this.setState({ navigate: true })
  };

  render() {
    const { navigate } = this.state;

    if (navigate) { 
      return <Redirect to = '/login' push ={true} />;
    }

    return (

      <div className="profile-container">
      < ProfileNavBar/>
      
      <button onClick={this.logOut}>Logout</button>

      </div>
    )
  }
}

export default LogOut;