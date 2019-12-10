import React, { Component } from 'react';
import './Routines.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'

import SelectRoutine from './SelectRoutine.js';
import ChosenRoutine from './ChosenRoutine.js';

export default class Routines extends Component {
    render() {
        return(
            <div className='routine-container'>
                <Router>
                    <Route path='/routines' exact render={(props) => <SelectRoutine {...props} />}/>
                    
                    <Route path='/routines/:id' exact render={(props) => <ChosenRoutine {...props} />}/>
                </Router>
                
                    <ChosenRoutine />
            </div>
        )
    }
}