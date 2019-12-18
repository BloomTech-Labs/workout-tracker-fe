import React, { Component } from "react";
import { getUser } from "../../actions/index";
import { connect } from "react-redux";
import "./Profile.css";

class UserInfo extends Component {
    constructor(props) {
        super(props);

        this.setState = {
            newUser: this.props.users
        }
    }

    componentDidMount() {
        this.props.getUser();
        this.props.getUserStats();
    }
    
    render() {
        return(
            <div className='user-info-container'>
                        <div className='user-info'>
                            <h3>Name: {this.props.first_name}</h3>
                            <div className='user-info-wrapper'>
                                <h3>Weight: {this.props.weight} </h3>
                                <h3>Bench Max: {this.props.bench_max}</h3>
                                <h3>Squat Max: {this.props.squat_max}</h3>
                            </div>
                            <div className='see-more'>
                                <a className='see-more-button' href='profile-info'>See More</a>     
                            </div>        
                        </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = {
  getUser
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
