import React, { useEffect } from "react";
import {
  HashRouter,
  Switch,
  Route,
  useLocation,
  useHistory,
  useParams
} from "react-router-dom";
import { useSelector } from 'react-redux'
import { login } from '@src/public/methods/index.js'

import routes from './config.jsx'

function App() {
  const { username } = useSelector((state) => state.user.userInfoObj)
  const { pathname } = useLocation()

  const toLogin = login()

  useEffect(() => {
    if (!username && pathname !== '/') {
      toLogin()
    }
  }, [username])

  return (
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
  )
}

export default function RouteConfigExample() {
  return (
    <HashRouter>
      <App></App>
    </HashRouter>
  );
}
