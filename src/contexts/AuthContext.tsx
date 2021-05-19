import React, { createContext, FC, useContext, useState } from 'react'
import { useMutation } from 'react-query'

import * as AuthService from 'services/AuthService'
import { JwtToken, SignupDto, User } from 'typings'

import { TOKEN_KEY, USER_KEY } from '../constants/localStorage'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { ErrorDto, LoginDetails } from '../typings'

// Consumers of the context will have access to these
interface AuthContextProps {
  // TODO: consider if token should be exported or gate behind isLoggedIn
  token?: JwtToken
  user?: User
  expiresAt: Date
  sendOtp: (userDetails: SignupDto) => Promise<string>
  verifyOtp: (otp: string) => Promise<boolean>
  isLoggedIn: (token: JwtToken) => boolean
  logout: () => void
  login: (loginDetails: LoginDetails) => Promise<{ token: JwtToken }>
}

// TODO: Iron out expiry with cy
const EXPIRY = new Date(2222, 11)

const AuthContext = createContext<AuthContextProps | undefined>(undefined)

/**
 * Hook for components nested in AuthProvider to get access to authState
 */
export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error(`useAuth must be used within a ProvideAuth component`)
  }
  return context
}

export const AuthProvider: FC = ({ children }) => {
  const [token, setToken] = useLocalStorage<JwtToken>(TOKEN_KEY)
  const [user, _setUser] = useLocalStorage<User>(USER_KEY)
  const [email, setEmail] = useState<string>('')

  const { mutateAsync: sendOtp } = useMutation<string, ErrorDto, SignupDto>(
    (signupDetails) =>
      AuthService.signUpUser(signupDetails).then((data) => {
        setEmail(signupDetails.email)
        return data
      }),
  )

  const { mutateAsync: verifyOtp } = useMutation<boolean, ErrorDto, string>(
    (otp) => {
      return AuthService.verifyOtp({ otp, email })
    },
  )

  const { mutateAsync: login } = useMutation<
    { token: JwtToken },
    ErrorDto,
    LoginDetails
  >((loginDetails) =>
    AuthService.loginUser(loginDetails).then((data) => {
      setToken(data.token)
      return data
    }),
  )

  const { mutateAsync: logout } = useMutation<unknown, unknown, void>(() =>
    AuthService.logoutUser().then(() => setToken(undefined)),
  )

  return (
    <AuthContext.Provider
      value={{
        sendOtp,
        isLoggedIn: () => !!token,
        user,
        expiresAt: EXPIRY,
        token,
        verifyOtp,
        logout,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
