import React from 'react';
import './App.css';
import { Home } from './Home';
import { Route, NavLink, BrowserRouter as Router } from 'react-router-dom';
import { animateScroll, Link } from 'react-scroll';
import { Login } from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
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
            <div onClick={() => animateScroll.scrollToTop()}>
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
                    <li
                      className="navBorder"
                      style={{
                        marginLeft: '20%',
                        width: '5em',
                        textAlign: 'center',
                        borderRadius: '5px',
                      }}
                    >
                      Login
                    </li>
                  </NavLink>
                  <NavLink to="/">
                    <li
                      className="navBorder"
                      style={{
                        marginLeft: '20%',
                        width: '5em',
                        textAlign: 'center',
                        borderRadius: '5px',
                      }}
                    >
                      Home
                    </li>
                  </NavLink>
                </ul>
              </nav>
            </div>
          </header>
          <div>
            <Route path="/login" component={Login} />
            <Route exact path="/" component={Home} />
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
