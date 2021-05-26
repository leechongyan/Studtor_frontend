import { UserType } from 'typings'

export type JwtToken = string

export interface AuthToken {
  token: JwtToken
  userType: UserType
  refreshToken: JwtToken
  verificationKey: string
  createdAt: Date
  updatedAt: Date
}

export interface VerificationDto {
  email: string
  verificationKey: string
}

export interface LoginDetails {
  email: string
  password: string
}

export interface SignupDto {
  firstName: string
  lastName: string
  password: string
  email: string
}
