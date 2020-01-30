import React, { Component } from "react";
import "../../css/Routines.css";
import { getStatuss } from "../../actions/index";
import { connect } from "react-redux"; 
import ProfileNavbar from './ProfileNavBar'
import MemberProfile from './MemberProfile'

class Userinfo extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getStatuss();
  }
  
  render() {
    
    if (this.props.loading) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    } else
      
      return (
        <div className='status-forum'>
          <ProfileNavbar />
          {this.props.status.map(a => (
            <div className='user-information' key='userI'>
            <div key={'infow'}>
                <h3>Weight: {a.weight} </h3>
                <h3>Bench Max: {a.bench_max}</h3>
                <h3>Squat Max: {a.squat_max}</h3>
                <h3>Height: {a.height}</h3>
                <h3>Body Mass Percentage: {a.bmi}</h3>
                <h3>Mile Time: {a.mile_time}</h3>
            </div>
            <a href='update-status' classname='update-btn'>UpdateProfile</a>
            
            </div>
          ))}
        </div>
      );
  }
}
const mapStateToProps = state => {
  console.log("this is mapstatetoprops stte ", state);
  return {
    status: state.userInfo.status,
    member_id: state.member_id,
    weight: state.weight,
    height: state.height,
    bmi: state.bmi,
    bench_max: state.bench_max,
    squat_max: state.squat_max,
    mile_time: state.mile_time,
    date: state.date,
    loading: state.loading
  };
};
export default connect(mapStateToProps, { getStatuss })(Userinfo);