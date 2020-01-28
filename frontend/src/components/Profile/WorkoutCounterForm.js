import React, { Component } from "react";
import { MDBBtn, MDBCollapse } from "mdbreact";
import "./Profile.css";

class WorkoutCounterForm extends Component {

    toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
      return (
      <>
    <select className="browser-default custom-select" style={{ width: '20%', marginBottom: '50px' }}>
          <option value="1">Upper Body</option>
          <option value="2">Core Body</option>
          <option value="3">Lower Body</option>
        </select>
      
    <div className="form-group">
        <div style={{ marginBottom: '30px' }}>
            <label htmlFor="exampleInput">Sets Completed</label>
            <input type="text" id="exampleInput" className="form-control" />
        </div>
        <div style={{ marginBottom: '30px' }}>
            <label htmlFor="exampleInput" >Reps Completed</label>
            <input type="text" id="exampleInput" className="form-control" />
        </div>
    </div>
    </>
      )
  }
  }

export default WorkoutCounterForm;