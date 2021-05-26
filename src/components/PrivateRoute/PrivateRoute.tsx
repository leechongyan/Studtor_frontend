import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'

import { ROUTES } from 'constants/routes'
import { useAuth } from 'contexts/AuthContext'

export const PrivateRoute = ({
  children,
  ...rest
}: RouteProps): JSX.Element => {
  const { token } = useAuth()

  // Show the component only when the user is logged in.
  // Otherwise, redirect the user to login page.
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !!token ? (
          children
        ) : (
          <Redirect
            to={{ pathname: ROUTES.LOGIN, state: { from: location } }}
          />
        )
      }
    />
  )
}
