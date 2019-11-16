import React, { Component } from 'react';

export default class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div className='user-info-container'>
                <div>
                    <p>This is a users info</p>
                </div>
            </div>
        )
    }
}