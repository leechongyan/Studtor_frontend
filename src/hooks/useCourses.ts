import { QueryObserverResult, RefetchOptions, useQuery } from 'react-query'

import * as CourseService from 'services/CourseService'

interface HookValues {
  courses: Array<string>
  fetchAllCourses: (
    options?: RefetchOptions | undefined,
  ) => Promise<QueryObserverResult<string[], Error>>
}

export const useCourses = (): HookValues => {
  const { data: courses, refetch: fetchAllCourses } = useQuery<
    Array<string>,
    Error,
    Array<string>,
    string
  >('fetchAllCourses', CourseService.getAllCourses, {
    initialData: [],
  })
  return {
    courses: courses ?? [],
    fetchAllCourses,
  }
}
