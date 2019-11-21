
import React from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* Header */}
          <div className='header'>

          </div>

          {/*Profile*/}
          <Route path='/profile' exact render={(props) => <Profile {...props} />}/>
        
          {/* Footer */}
          <div className='footer'>

          </div>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
