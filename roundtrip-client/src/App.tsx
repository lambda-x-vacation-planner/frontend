import React from 'react';
import './App.css';
import { Home } from './Home';
import { Route, NavLink, BrowserRouter as Router } from 'react-router-dom';
import { animateScroll, Link } from 'react-scroll';
import { Login } from './Login';
import { Main } from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './PrivateRoute';

const App: React.FC = () => {
  const doubleClick = () => {
    animateScroll.scrollToTop();
  };

  return (
    <div>
      <Router>
        <div>
          <header
            className="header"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingLeft: '3%',
              paddingRight: '5%',
              marginBottom: '3%',
            }}
          >
            <div onClick={() => doubleClick()}>
              <h2 style={{ fontSize: '1.5em', color: '#0033cc' }} className="topHover">
                roundtrip{' '}
                <span role="img" aria-label="coconut-tree">
                  🌴
                </span>
              </h2>
            </div>
            <div>
              <nav>
                <ul style={{ display: 'flex' }}>
                  <Link to="register" smooth={true} duration={1000}>
                    <li
                      className="navBorder"
                      style={{
                        width: '5em',
                        textAlign: 'center',
                        borderRadius: '5px',
                      }}
                    >
                      Sign Up
                    </li>
                  </Link>
                  <NavLink to="/login">
                    <li className="navBorder">Login</li>
                  </NavLink>
                  <NavLink to="/main">
                    <li className="navBorder">Main</li>
                  </NavLink>
                  <NavLink to="/">
                    <li className="navBorder">Home</li>
                  </NavLink>
                </ul>
              </nav>
            </div>
          </header>
          <div>
            <Route path="/login" component={Login} />
            <Route exact path="/" component={Home} />
            <PrivateRoute exact path="/main" component={Main} />
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
