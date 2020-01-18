import React, { Component } from 'react';
import './Routines.css';
import { getRoutines } from '../../actions/index'
import { connect } from 'react-redux';
import axios from 'axios'

class SelectRoutine extends Component {

    constructor(props) {
        super(props);
        this.state = {
          routines: []
        };
      }
      componentDidMount() {
        axios
          .get("https://firstrep.herokuapp.com/api/routines")
          .then(response => {
            console.log(response);
            this.setState({ routines: response.data });
          })
          .catch(error => {
            console.log(error);
          });
      }

    render() {
        return(
            //Routines Route
            <div className='select-routine-container'>
                <h2>Routines</h2>
                    <a className='routines' href='/exercises'>
                        {this.state.routines.map(r => (
                                <div className='routine' key={r.routine_name}>
                                    <h4 >{r.routine_name}</h4>
                                    <div className='routine-description'>
                                        <h4>{r.routine_description}</h4>
                                    </div>
                                </div>
                        ))}
                    </a>
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