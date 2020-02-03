import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute: React.FC<any> = ({
  component: Component,
  ...rest
}: {
  component: React.ComponentType<any>;
}) => (
  <Route
    {...rest}
    render={props => {
      if (localStorage.getItem('token')) {
        return <Component {...props} />;
      } else {
        return <Redirect to="/login" />;
      }
    }}
  />
);

export default PrivateRoute;