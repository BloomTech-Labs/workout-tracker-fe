import React from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink
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
              <MDBNavItem>
                <MDBNavLink to="/profile-onboarding">Onboading</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/add-routine">Add Routine</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/display-routine">Display Routine</MDBNavLink>
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
