import React, { Component } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import { getUser } from '../../Action/Action.js'
import { connect } from 'react-redux';

import './Profile.css';

class UserInfo extends Component {
    constructor(props) {
        super(props)

        this.setState = {
            newUser: this.props.users
        }
    }

    componentDidMount() {
        this.props.getUser()
    }
    
    render() {
        return(
            <div className='user-info-container'>
                        <div className='user-info'>
                            <h3>Name: {this.props.users.first_name}</h3>
                            <div className='user-info-wrapper'>
                                <h3>Weight: {this.props.users.weight} </h3>
                                <h3>Bench Max: {this.props.users.bench_max}</h3>
                                <h3>Squat Max: {this.props.users.squat_max}</h3>
                            </div>
                            <div className='see-more'>
                            <Link to ='/profile-info' >
                                <button className='see-more-button'>See More</button> 
                            </Link>       
                            </div>        
                        </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        users: state.users
    }
}

const mapDispatchToProps = {
    getUser,
}


export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);




