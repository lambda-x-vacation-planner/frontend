import React, { useState, useEffect } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { Button, Dropdown } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Main.css';
import { locations } from './data';
import { AppState, InitialState } from './reducers';
import { useSelector } from 'react-redux';

export const Main = () => {
  const [selectLocation, setSelectLocation] = useState<any>();
  // const user: any = useSelector((state: AppState) => state.loginReducer);
  const user: any = useSelector((state: InitialState) => state.email);
  const history = useHistory();
  const [viewport, setViewport] = useState({
    latitude: 39.381266,
    longitude: -97.922211,
    width: '90vw',
    height: '60vh',
    zoom: 10,
  }) as any;

  const logout = () => {
    localStorage.clear();
    history.push('/');
  };

  useEffect(() => {
    console.log(user);
    const listener = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectLocation(null);
      }
    };
    window.addEventListener('keydown', listener);
    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, [user]);

  return (
    <>
      <div className="mainSearch">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {user}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>Profile</Dropdown.Item>
            <Dropdown.Item>Setting</Dropdown.Item>
            <Dropdown.Item onClick={logout}>Log Out</Dropdown.Item>
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
    </>
  );
};
