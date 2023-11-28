import React from 'react';
import './App.css'
import Home from './customer-ui/pages/Home.js'
import AdminDashboard from './admin-ui/pages/AdminDashboard.js'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/admin" component={AdminDashboard} />
          <Route path="/customer" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
