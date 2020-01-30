import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { Button } from 'react-bootstrap';
import './Main.css';
import { locations } from './data';

export const Main = () => {
  console.log('locations ', locations);
  const [selectLocation, setSelectLocation] = useState<any>();
  const [viewport, setViewport] = useState({
    latitude: 36.778259,
    longitude: -119.417931,
    width: '80vw',
    height: '60vh',
    zoom: 10,
  }) as any;
  return (
    <>
      <div className="mainSearch">
        <h4>Tenzing</h4>
        <input className="mainInput" type="text" placeholder="search" />
      </div>
      <div style={{ marginTop: '2rem', float: 'right', marginRight: '2rem' }}>
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
            <Popup latitude={selectLocation.lat} longitude={selectLocation.lon}>
              <div>park</div>
            </Popup>
          ) : null}
        </ReactMapGL>
      </div>
    </>
  );
};
