import React, { Component } from 'react';
import './Routines';
import { getRoutines, getExercises } from '../../Action/Action.js'
import { connect } from 'react-redux';

class ChosenRoutine extends Component {

    constructor(props) {
        super(props)

        this.setState = {
            newRoutine: this.props.routines
        }
    }

    componentDidMount() {
        this.props.getRoutines();
        this.props.getExercises()
    }

    render() {
        return(
            <div className='chosen-routine-container'>
                <h2>{this.props.routines.routine_name}</h2>
                <div className='exercises'>
                    {this.props.exercises.map((routine) => {
                         return (
                            <h4>Test Exercise</h4>
                        )
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        routines: state.routines,
        exercises: state.exercises
    }
}

const mapDispatchToProps = {
    getRoutines,
    getExercises
}


export default connect(mapStateToProps, mapDispatchToProps)(ChosenRoutine);