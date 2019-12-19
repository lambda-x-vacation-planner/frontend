import React from 'react';
import './App.css';
import { LandingPage } from './Landing';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return (
    <div>
      {/* <Home text="hello" favoriteNumber={23} /> */}
      {/* <Table /> */}
      <LandingPage />
    </div>
  );
};

export default App;
