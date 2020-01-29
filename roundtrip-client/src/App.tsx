import React from 'react';
import './App.css';
import { Home } from './Home';
import { Route, NavLink, BrowserRouter as Router } from 'react-router-dom';
import { animateScroll, Link } from 'react-scroll';
import { Login } from './Login';
import { Main } from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';

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
                    <li
                      className="navBorder"
                      style={{
                        marginLeft: '20%',
                        width: '5em',
                        pointerEvents: 'none',
                        textAlign: 'center',
                        borderRadius: '5px',
                      }}
                    >
                      Login
                    </li>
                  </NavLink>
                  <NavLink to="/main">
                    <li
                      className="navBorder"
                      style={{
                        marginLeft: '20%',
                        width: '5em',
                        pointerEvents: 'none',
                        textAlign: 'center',
                        borderRadius: '5px',
                      }}
                    >
                      Main
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
            <Route path="/main" component={Main} />
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
