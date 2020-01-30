import React from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
} from "mdbreact";

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
              <MDBNavItem>
                <MDBNavLink to="/profile">Profile</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem >
                <MDBNavLink to="/profile-onboarding">Onboading</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/graphs">Graphs</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>

            <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink to="/logout">Logout</MDBNavLink>
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