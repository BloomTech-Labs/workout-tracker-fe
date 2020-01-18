import React, { Component } from "react";
import "../Routines/Routines.css";
import { getMembers } from "../../actions/index";
import { connect } from "react-redux"; 

class MemberProfile extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getMembers(); 
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
          {console.log('member is', this.props.member)}
          {this.props.member.map(a => (
            <div className='user-info' key={a.id}>
                <h2>Name: {a.last_name}</h2>
            </div>
          ))}
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