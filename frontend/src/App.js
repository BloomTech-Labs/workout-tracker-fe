import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Profile from './components/Profile/Profile.js';


class App extends React.Component {
  render() {
    return (
      <Router>
      <div className="App">
        {/* Header */}
        <div className='header'>

        </div>

        {/*Profile*/}
        <Route path='/profile' exact render={(props) => <Profile {...props} />}/>
        
        {/* Footer */}
        <div className='footer'>

        </div>
      </div>
      </Router>
    );
  }
}

export default App;
