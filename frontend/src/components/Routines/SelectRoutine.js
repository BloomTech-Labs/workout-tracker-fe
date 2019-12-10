import React, { Component } from 'react';
import './Routines';
import { getRoutines } from '../../Action/Action.js'
import { connect } from 'react-redux';

class SelectRoutine extends Component {

    constructor(props) {
        super(props)

        this.setState = {
            newRoutine: this.props.routines
        }
    }

    componentDidMount() {
        this.props.getRoutines()
    }

    render() {
        return(
            <div className='select-routine-container'>
                <h2>Routines</h2>
                    <div className='routines'>
                        {this.props.routines.map((routine) => {
                            return (
                                <div>
                                    <h4>{routine.routine_name}</h4>
                                    <div>
                                        <h4>{routine.routine_description}</h4>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        routines: state.routines
    }
}

const mapDispatchToProps = {
    getRoutines,
}


export default connect(mapStateToProps, mapDispatchToProps)(SelectRoutine);