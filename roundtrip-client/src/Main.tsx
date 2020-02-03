import React, { useState, useEffect } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { Button, Dropdown } from 'react-bootstrap';
import { initialState } from './reducers';
import './Main.css';
import { locations } from './data';

export const Main = () => {
  const [selectLocation, setSelectLocation] = useState<any>();
  const [viewport, setViewport] = useState({
    latitude: 39.381266,
    longitude: -97.922211,
    width: '90vw',
    height: '60vh',
    zoom: 10,
  }) as any;

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      console.log('initialState ', initialState);
      if (e.key === 'Escape') {
        setSelectLocation(null);
      }
    };
    window.addEventListener('keydown', listener);
    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, []);

  return (
    <>
      <div className="mainSearch">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Tenzing Yeshi
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Setting</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Sign Out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <input className="mainInput" type="text" placeholder="search" />
      </div>
      <div style={{ marginTop: '2rem', marginLeft: '5%', width: '100%' }}>
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          mapStyle="mapbox://styles/tyeshi777/ck5zyns7t0h6x1jo6m49h3cg3"
          onViewportChange={viewport => setViewport(viewport)}
        >
          {locations.map(location => (
            <Marker key={location.index} latitude={location.lat} longitude={location.lon}>
              <Button
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.preventDefault();
                  setSelectLocation(location);
                }}
              >
                <span role="img" aria-label="umbrella">
                  ⛱
                </span>
              </Button>
            </Marker>
          ))}
          {selectLocation ? (
            <Popup
              latitude={selectLocation.lat}
              longitude={selectLocation.lon}
              onClose={() => setSelectLocation(null)}
            >
              <div style={{ padding: '1rem', textAlign: 'center' }}>
                <h4>{selectLocation.country}</h4>
                <img
                  src={selectLocation.picture}
                  alt="tourist-destination"
                  style={{ width: '22em', height: '12em' }}
                />
              </div>
            </Popup>
          ) : null}
        </ReactMapGL>
      </div>
      <div>
        <form className="mainForm">
          <input className="mainFormInput" type="text" />
          <input className="mainFormInput" type="text" />
          <input className="mainFormInput" type="text" />
          <input className="mainFormInput" type="text" />
          <Button style={{ marginTop: '1rem', width: '30%' }}>submit</Button>
        </form>
      </div>
    </>
  );
};
