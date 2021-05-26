import { AuthToken } from 'typings'

export type UserType = 'student' | 'tutor'

// TODO: Decide if this should be a parent type with student and tutor extending this type or not
export interface User {
  email: string
  profilePic: string
  numTutors: number
  numStudents: number
  id: string
  name: string
  calendarId: string
}

// This is a union type of both User and AuthToken
export interface UserDto extends User, AuthToken {}
