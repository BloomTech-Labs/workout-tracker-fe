import React, { Component } from 'react';
import './Profile.css';

export default class UserInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'sir',
            weight: 157,
            workout_streak: 2,
            bench_max: 200,
            squat_max: 275
        };
    }

    render() {
        return(
            <div className='user-info-container'>
                <div>
                    <h3>Name: {this.props.name}</h3>
                    <div className='user-info-wrapper'>
                        <h3>Weight: {this.props.weight}</h3>
                        <h3>Workout Streak: {this.props.workout_streak}</h3>
                        <h3>Bench Max: {this.props.bench_max}</h3>
                        <h3>Bench Max: {this.props.squat_max}</h3>
                    </div>                  
                </div>
            </div>
        )
    }
}