import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import {
  MDBContainer,
  MDBMask,
  MDBView,
  MDBBtn,
  MDBCarousel, 
  MDBCarouselCaption, 
  MDBCarouselInner, 
  MDBCarouselItem
} from "mdbreact";

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
      <Navbar />
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
          <MDBContainer className="text-center my-5 first-div">
          <div className='container-app'>
            <img className='first-image'
              src="https://s3.images-iherb.com/blog/uploads/best-nutrition-habits-for-workout-recovery-large.jpg"
            />   
            <div>
              <h1 className='first-p'>Let the gains begin.</h1>
              <p align="justify" className='first-tittle'>
              <ul className='unorder-list'>
                <li>Have you own Dashboard</li>
                <li>Record your workout</li>
                <li>Track your body status and training analytics</li>
              </ul>
              </p>
            </div>
          </div>
          </MDBContainer>
        </main>

        
      <div className='container container-div'>
      <div className='second-container-app'>
        <div>
          <h1>First Rep is an app that lets you create and manage workout routines.</h1>
          <p align="justify" className='about-app'>
            First Rep workout app lets you create, print, track and chart workout routines on your own.
            By giving you access to powerful workout routines creation tools and a huge exercise database, First Rep
            will enable you to take control of your workouts by letting you create effective workout routines. 
            Whether you are using the target muscle workout routine or one of the many pre-built workout routines 
            for sports or specific body areas, you are sure to find a way to create workout routines that work for you.
            </p> 
        </div>
        <img className='second-image'
          src="https://connect.garmin.com/static/screen-phone-myday-717fec02a4d8eea2690241774363b357.png"
        />       
      </div>
      </div>

    <MDBContainer className='caroussel'>
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

      <div>
        <footer>
        <p className='footer-copyright'>Copyright © 2020 LambdaSchool. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
    
    );
  }
}

export default FullPageIntroWithFixedNavbar;
