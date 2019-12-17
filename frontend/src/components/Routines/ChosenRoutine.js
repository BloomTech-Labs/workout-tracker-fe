import React, { Component } from 'react';
import './Routines.css';

export default class ChosenRoutine extends Component {

    constructor(props) {
        super(props)

        this.setState = {
            newRoutine: this.props.routines
        }
    }

    render() {
        return(
            <div className='chosen-routine-container'>
                <h2>Exercises</h2>
                <div className='exercises'>
                    <div className='exercise'>
                        <h3>UpperBody</h3>
                        <div className ='exercise-list'>
                            <h4>Bench Press</h4>
                            <h4>Incline Bench Press</h4>
                            <h4>Push Ups</h4>
                            <h4>Bar Raises</h4>
                            <h4>Butterfly Raises</h4>
                        </div>
                    </div>
                    <div className='exercise'>
                        <h3>Core</h3>
                        <div>
                            <h4>Sit Ups</h4>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}



