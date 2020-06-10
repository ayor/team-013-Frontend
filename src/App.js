import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/homepage/Home';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import Dashboard from './components/dashboard/Dashboard';
import Test from './components/Test/test';
import ContactUs from './components/contactus/contactus';
import AboutUs from './components/about/about';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/test/:userName/:course" component={Test} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/aboutus" component={AboutUs} />
          <Route component={Home} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
