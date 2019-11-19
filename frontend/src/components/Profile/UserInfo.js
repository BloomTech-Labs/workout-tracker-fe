import React, { Component } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';


import './Profile.css';

class UserInfo extends Component {
    
    render() {
        return(
            <div className='user-info-container'>
                <div className='user-info'>
                    <h3>Name: </h3>
                    <div className='user-info-wrapper'>
                        <h3>Weight: </h3>
                        <h3>Workout Streak: </h3>
                        <h3>Bench Max: </h3>
                        <h3>Squat Max: </h3>
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


export default (UserInfo);




