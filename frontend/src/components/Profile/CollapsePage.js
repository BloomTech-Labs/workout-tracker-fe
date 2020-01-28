import React, { Component } from "react";
import { MDBContainer, MDBCollapse, MDBCard, MDBCardBody} from "mdbreact";

class CollapsePage extends Component {
state={
  collapseID: ""
}

toggleCollapse = collapseID => () =>
  this.setState(prevState => ({
    collapseID: prevState.collapseID !== collapseID ? collapseID : ""
  }));

render() {
const { collapseID } = this.state;
  return (
    <MDBContainer style={{ marginBottom: '50px', width: '100%' }}>
      <MDBContainer className="mt-5">
        <MDBCard className="mt-3" style={{ marginBottom: '50px', borderRadius: '10px', backgroundColor: 'rgb(77, 143, 230)'  }}>
          <h2 onClick={this.toggleCollapse("collapse1")}>
            Upper Body
            <i className={ collapseID==="collapse1" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down" } style={{ marginLeft: '10px' }} />
          </h2>
          <MDBCollapse id="collapse1" isOpen={collapseID}>
            <MDBCardBody>
              <p>Sets completed: </p>
              <p>Reps CompletedL: </p>
            </MDBCardBody>
          </MDBCollapse>
        </MDBCard>

        <MDBCard style={{ marginBottom: '50px', borderRadius: '10px', backgroundColor: 'rgb(77, 143, 230)'  }}>
          <h2 onClick={this.toggleCollapse("collapse2")} >
            Core Body
            <i className={ collapseID==="collapse2" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down" } style={{ marginLeft: '10px' }} />
          </h2>
          <MDBCollapse id="collapse2" isOpen={collapseID}>
            <MDBCardBody>
            <p>Sets completed: </p>
              <p>Reps Completed: </p>
            </MDBCardBody>
          </MDBCollapse>
        </MDBCard>

        <MDBCard style={{ marginBottom: '50px', borderRadius: '10px', backgroundColor: 'rgb(77, 143, 230)' }}>
          <h2 onClick={this.toggleCollapse("collapse3")} >
            Lower Body
            <i className={ collapseID==="collapse3" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down" } style={{ marginLeft: '10px' }} />
          </h2>
          <MDBCollapse id="collapse3" isOpen={collapseID}>
            <MDBCardBody>
            <p>Sets completed: </p>
              <p>Reps Completed: </p>
            </MDBCardBody>
          </MDBCollapse>
        </MDBCard>
      </MDBContainer>
    </MDBContainer>
    );
  }
}

export default CollapsePage;