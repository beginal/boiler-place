import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Routef
} from "react-router-dom";

import LandingPage from "./Components/views/LandingPage/LandingPage"
import LoginPage from "./Components/views/LoginPage/LoginPage"
import RegisterPage from "./Components/views/RegisterPage/RegisterPage"
function App() {
  return (   
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/Login" component={LoginPage} />
          <Route exact path="/Register" component={RegisterPage} />
          
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
