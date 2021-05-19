import { QueryObserverResult, RefetchOptions, useQuery } from 'react-query'

import * as CourseService from 'services/CourseService'

import { Course } from '../typings/course'

interface HookValues {
  courses: Array<Course>
  fetchAllCourses: (
    options?: RefetchOptions | undefined,
  ) => Promise<QueryObserverResult<Course[], Error>>
}

export const useCourses = (): HookValues => {
  const { data: courses, refetch: fetchAllCourses } = useQuery<
    Array<Course>,
    Error,
    Array<Course>,
    string
  >('fetchAllCourses', CourseService.getAllCourses, {
    initialData: [],
  })
  return {
    courses: courses ?? [],
    fetchAllCourses,
  }
}
