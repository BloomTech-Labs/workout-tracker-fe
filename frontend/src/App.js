import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Profile from './components/Profile/Profile.js';


class App extends React.Component {
  render() {
    return (
      
      
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Alatsi&display=swap" rel="stylesheet"></link>
        <Router>
        {/* Header */}
        <div className='header'>

        </div>

        {/*Profile*/}
        <Route path='/profile' exact render={(props) => <Profile {...props} />}/>
        
        {/* Footer */}
        <div className='footer'>

        </div>
        </Router>
      </div>
      
    );
  }
}

export default App;
