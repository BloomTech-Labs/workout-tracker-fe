import React, { Component } from 'react';
import '../../css/Routines.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Profile from '../Profile/Profile'

import SelectRoutine from './SelectRoutine.js';
import ChosenRoutine from './ChosenRoutine.js';

export default class Routines extends Component {
    render() {
        return(
            <div className='routine-container'>
                <Switch>
                <Router>
                    <Route path='/routines' exact render={(props) => <SelectRoutine {...props} />}/>
                    <Route exact path='/exercises' render={(props) => <ChosenRoutine {...props} />}/>
                </Router>
                </Switch>
                

                    
            </div>
        )
    }
}