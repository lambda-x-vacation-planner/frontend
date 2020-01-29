import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import './Main.css';
export const Main = () => {
  const [viewport, setViewport] = useState({
    latitude: 36.778259,
    longitude: -119.417931,
    width: '100vw',
    height: '100vh',
    zoom: 10,
  });
  return (
    <>
      <div className="mainSearch">
        <h4>Tenzing</h4>
        <input className="mainInput" type="text" placeholder="search" />
      </div>
      <div style={{ marginTop: '2rem' }}>
        <ReactMapGL {...viewport} mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}>
          Markers here
        </ReactMapGL>
      </div>
    </>
  );
};
