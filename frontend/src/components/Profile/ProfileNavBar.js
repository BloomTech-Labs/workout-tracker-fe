import React from "react";
import { Link } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBContainer,
  MDBMask,
  MDBView,
  MDBBtn
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

class ProfileNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {
    return (
      <div>
        <MDBNavbar color="elegant" dark expand="md" fixed="top">
          {!this.state.isWideEnough && (
            <MDBNavbarToggler onClick={this.onClick} />
          )}
          <MDBCollapse isOpen={this.state.collapse} navbar>
            <MDBNavbarNav left>
              <MDBNavItem active>
                <MDBNavLink to="/profile">Profile</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/graphs">Graphs</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>

            <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink to="/Signout">Sign out</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </div>
    );
  }
}

export default ProfileNavbar;

// <a href='/'>
// <div className='logo' />
// </a>
// <h1>First Rep</h1>
// <a href='/'>Home</a>
// <a href='/routines'>Routines</a>
// <a href='/profile'>Profile</a>
// <a href='/aboutus'>About Us</a>