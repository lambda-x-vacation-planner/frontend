import React from 'react';
import './App.css';
import { Landing } from './Landing';
import { Route, NavLink, BrowserRouter as Router } from 'react-router-dom';
import { Login } from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return (
    <Router>
      <>
        <div className="navLinks">
          <NavLink style={{ textDecoration: 'none' }} exact to="/">
            {' '}
            Landing
          </NavLink>
          <NavLink style={{ textDecoration: 'none' }} to="/login">
            {' '}
            Login
          </NavLink>
        </div>
        <div>
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
        </div>
      </>
    </Router>
  );
};

export default App;
