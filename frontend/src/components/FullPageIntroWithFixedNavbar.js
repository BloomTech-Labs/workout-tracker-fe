import React from "react";
import { Link } from "react-router-dom";
import FeaturesStyleSection from '../styles/FeaturesSection'
import NavBarStyle from "../styles/NavBarStyle";
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
  MDBBtn,
  MDBCarousel, 
  MDBCarouselCaption, 
  MDBCarouselInner, 
  MDBCarouselItem
} from "mdbreact";

import Modal from "./Modal";

import { BrowserRouter as Router } from "react-router-dom";

class FullPageIntroWithFixedNavbar extends React.Component {
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

        <header>
          <Router>
           
          </Router>
          <MDBView src="https://images.unsplash.com/photo-1500856056008-859079534e9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80">
            <MDBMask
              overlay="black-light"
              className="flex-center flex-column text-white text-center"
            >
              <h1 style={{ fontWeight: "400" }}>First Rep</h1>

              <br />
              <p style={{ fontWeight: "400" }}>Everyone starts somewhere.</p>

              <div>
                <Link to="/Signup">
                  <MDBBtn color="indigo">Signup</MDBBtn>
                </Link>
                <Link to="/login">
                  <MDBBtn color="indigo">Login</MDBBtn>
                </Link>
              </div>
            </MDBMask>
          </MDBView>
        </header>

        <main>
          <MDBContainer className="text-center my-5">
            <p align="justify">
            Starting an exercise routine is never easy, especially when you don't know from where to begin.  It's always frustrating when you put an effort 
            to something but you're not confident about what you're doing and therefore not seeing results. Being able to have an app that you can trust on 
            instructions and workout plans is essential.
            </p>
          </MDBContainer>
        </main>

        <FeaturesStyleSection>
    <MDBContainer>
      <MDBCarousel
      activeItem={1}
      length={7}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://miro.medium.com/max/3412/1*rqRfDYF5p4dFPmugymyb4w.jpeg"
              alt="First slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">User Dashboard</h3>
            <p>Have a profile page created just for you.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://www.amny.com/wp-content/uploads/2016/01/image-18-740x415.jpeg"
              alt="Second slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Record Workout</h3>
            <p>Keep track of your everyday workout.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://darebee.com/images/fitness/how-to-build-muscle.jpg"
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Body Stats</h3>
            <p>Keep track of your body status change.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="4">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://www.larutadelsorigens.cat/wallpic/full/138-1386244_background-image-forex-equity-vs-options-trading-background.png"
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Training Analytics</h3>
            <p>Track your progress made with graphs.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="5">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://cdn6.dissolve.com/p/D237_152_558/D237_152_558_1200.jpg"
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Exercise Library</h3>
            <p>Have access to a Library full of workouts.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="6">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://darebee.com/images/content/training-plans/gladiator.jpg"
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Routine Planner</h3>
            <p>Create your own routine.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="7">
          <MDBView>
            <img
              className="d-block w-100"
              src="http://www.asianefficiency.com/wp-content/uploads/2016/08/emailnotifications.jpg"
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Notification System</h3>
            <p>Get notifications on your mobile.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
    </FeaturesStyleSection>
      </div>
    );
  }
}

export default FullPageIntroWithFixedNavbar;
