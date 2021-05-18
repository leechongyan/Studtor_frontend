import React, { FC } from 'react'
import { Redirect, Switch } from 'react-router-dom'

import PublicRoute from 'components/PublicRoute'
import { ROUTES } from 'constants/routes'
import LoginPage from 'screens/LoginPage'

export const AppRouter: FC = () => {
  return (
    <Switch>
      <PublicRoute exact path={ROUTES.LOGIN}>
        <LoginPage />
      </PublicRoute>
      <PublicRoute path={ROUTES.ROOT}>
        {/* TODO: add MainPage after LoginPage */}
        <Redirect to={ROUTES.LOGIN} />
      </PublicRoute>
    </Switch>
  )
}
