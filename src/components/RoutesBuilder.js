import React from "react";
import { Route } from "react-router-dom";

import PrivateRoute from "components/PrivateRoute";

export default ({ routes }) => (
  <>
    {routes.map((route, index) =>
      route.private ? (
        <PrivateRoute
          key={index}
          component={route.component}
          exact={route.exact}
          path={route.path}
        />
      ) : (
        <Route
          key={index}
          component={route.component}
          exact={route.exact}
          path={route.path}
        />
      )
    )}
  </>
);
