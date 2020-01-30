import React, { Component } from "react";
import "../../css/Routines.css";
import { getMembers } from "../../actions/index";
import { connect } from "react-redux"; 
import { Link } from "react-router-dom";

class MemberProfile extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getMembers(); 
  }
  
  handleClick(event) {
    event.preventDefault();
    event.stopPropagation();
    alert('click. but dont redirect...');

    return false;

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
        <div>
          <div className="member-information">
            {console.log('member is', this.props.member)}
              <h2>Name: {this.props.member.first_name}</h2>
              <h2>Last Name: {this.props.member.last_name}</h2>
              <h2>username: {this.props.member.username}</h2>
              <h2>Email: {this.props.member.email}</h2>
          </div>
          <div>
          <Link to='/profile-info'>See More Info</Link>
          </div>
        </div>
      );
  }
}
const mapStateToProps = state => {
  console.log("this is mapstatetoprops stte ", state);
  return {
    member: state.userInfo.member,
    first_name: state.first_name,
  };
};
export default connect(mapStateToProps, { getMembers })(MemberProfile);