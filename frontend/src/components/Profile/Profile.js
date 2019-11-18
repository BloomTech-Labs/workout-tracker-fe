import React, { Component } from 'react';
import './Profile.css';
import UserInfo from './UserInfo.js'
import ProgressGraph from './ProgressGraph.js'

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div className='profile-container'>
                    <UserInfo />
            </div>
        )
    }
}