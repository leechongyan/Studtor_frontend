import React, { FC } from 'react'
import { Redirect, Switch } from 'react-router-dom'

import PrivateRoute from 'components/PrivateRoute'
import PublicRoute from 'components/PublicRoute'
import { ROUTES } from 'constants/routes'
import CourseContainer from 'screens/CoursePage'
import HomePage from 'screens/HomePage'
import LoginPage from 'screens/LoginPage'

export const AppRouter: FC = () => {
  return (
    <Switch>
      <PublicRoute exact path={ROUTES.LOGIN}>
        <LoginPage />
      </PublicRoute>
      <PrivateRoute path={`${ROUTES.COURSE}/:type/:courseCode`}>
        <CourseContainer />
      </PrivateRoute>
      <PrivateRoute exact path={ROUTES.HOME}>
        <HomePage />
      </PrivateRoute>
      <PublicRoute path={ROUTES.ROOT}>
        {/* TODO: add MainPage after LoginPage */}
        <Redirect to={ROUTES.LOGIN} />
      </PublicRoute>
    </Switch>
  )
}
