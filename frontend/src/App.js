import React from 'react';
import './App.css';

import Profile from './components/Profile/Profile.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* Header */}
        <div className='header'>

        </div>

        {/*Profile*/}
        <Profile />
      </div>
    );
  }
}

export default App;
