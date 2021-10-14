import React from "react";
import {
  HashRouter,
  Switch,
  Route,
} from "react-router-dom";

import routes from './config.jsx'

export default function RouteConfigExample() {
  return (
    <HashRouter>
      <Switch>
        {routes.map((route, i) => (
          <Route
            path={route.path}
            key={i}
            render={props => (
              // pass the sub-routes down to keep nesting
              <route.component {...props} routes={route.routes} />
            )}
          />
        ))}
      </Switch>
    </HashRouter>
  );
}
