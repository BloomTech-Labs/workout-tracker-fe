import React, { useState } from "react";
import { getMembers } from "../../actions";
import { connect } from "react-redux";
import "./Profile.css";
import axios from "axios";
class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    axios
      .get("https://firstrep.herokuapp.com/api/members")
      .then(response => {
        console.log(response);
        this.setState({ users: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className='user-info-container'>
            {this.state.users.map(a => (
            <div className='user-info' key={a.id}>
                <h3>Name: {a.first_name}</h3>
                <div className='user-info-wrapper'>
                    <h3>Weight: {this.props.weight} </h3>
                    <h3>Bench Max: {this.props.bench_max}</h3>
                    <h3>Squat Max: {this.props.squat_max}</h3>
                </div>
                <div className='see-more'>
                    <a className='see-more-button' href='profile-info'>See More</a>     
                </div> 
                </div>
                ))}       
        </div>
    );
  }
}
const mapStateToProps = state => ({
  allMembers: state.members
});
export default connect(mapStateToProps, { getMembers })(Test);