import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from 'utils';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isLoading, setIsloading] = useState(true)

  return (
    <Route {...rest} render={props => (
      isLogin() ?
        <Component {...props} />
        : <Redirect to="/signin" />
    )} />
  );
};

export default PrivateRoute;