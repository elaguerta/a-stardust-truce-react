import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NavigationBar from './containers/NavigationBar';
import Login from './containers/UserRegistration/Login';
import Signup from './containers/UserRegistration/Signup';


function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route exact path='/'><Login /></Route> //show this only when the user is not logged in
          <Route exact path='/'><Signup /></Route> //show this only when the user is not logged in
        </Switch>
      </Router>
    </div>
  );
}

export default App;
