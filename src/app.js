import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/homepage/Home';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import Dashboard from './components/dashboard/Dashboard';
import Test from './components/dashboard/test';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/test" component={Test} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
