import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'

import { ROUTES } from 'constants/routes'

// TODO: replace this with an actual hook once BE is done
const useAuth = () => ({
  token: 'TODO',
})

export interface PublicRouteProps extends RouteProps {
  // If restricted is true, only non-authed users can access the route.
  // i.e. signin page, where authed users accessing that page should be
  // redirected out.
  // If restricted is false, then both authed and non-authed users can access
  // the route.
  restricted?: boolean
}

// Checks if a route is restricted and redirects to the base endpoint if it is
export const PublicRoute = ({
  children,
  restricted = true,
  ...rest
}: PublicRouteProps): JSX.Element => {
  const { token } = useAuth()

  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={({ location }) =>
        !!token && restricted ? (
          <Redirect
            to={{
              pathname: ROUTES.ROOT,
              state: { from: location },
            }}
          />
        ) : (
          children
        )
      }
    />
  )
}
