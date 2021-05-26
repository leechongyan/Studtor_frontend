import { AuthToken } from 'typings'

export type UserType = 'USER' | 'ADMIN'

export interface User {
  email: string
}

// This is a union type of both User and AuthToken
export interface UserDto extends User, AuthToken {}
