import React, { useState } from "react";
import { getMembers } from "../../actions";
import { connect } from "react-redux";
import "../../../css/Profile.css";
import axios from "axios";

class MoreInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    axios
      .get("https://firstrep.herokuapp.com/api/members", "https://firstrep.herokuapp.com/api/memberstatus")
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
                    <  h3>Name: {a.first_name}</h3>
                    <div className='user-info-wrapper'>
                        <h3>Weight: {a.weight} </h3>
                        <h3>Bench Max: {a.bench_max}</h3>
                        <h3>Squat Max: {a.squat_max}</h3>
                        <h3>Height: {a.height}</h3>
                        <h3>Body Mass Percentage: {a.BMI}</h3>
                        <h3>Mile Time: {a.mile_time}</h3>
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
export default connect(mapStateToProps, { getMembers })(MoreInfo);