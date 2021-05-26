import { QueryObserverResult, RefetchOptions, useQuery } from 'react-query'

import * as UserService from 'services/UserService'

import { User, UserType } from '../typings/user'

interface HookValues {
  users: Array<User>
  getAllUsers: (
    options?: RefetchOptions | undefined,
  ) => Promise<QueryObserverResult<User[], Error>>
}

export const useGetUsers = (
  courseCode: string,
  userType: UserType,
): HookValues => {
  const { data: users, refetch: getAllUsers } = useQuery<
    Array<User>,
    Error,
    Array<User>,
    string
  >(
    'getAllUsers',
    () =>
      userType === 'student'
        ? UserService.getAllStudents(courseCode)
        : UserService.getAllTutors(courseCode),
    {
      initialData: [],
    },
  )
  return {
    users: users ?? [],
    getAllUsers,
  }
}
