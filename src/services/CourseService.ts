import { ApiService } from './ApiService'

const COURSES_ENDPOINT = 'courses'
const MOCK_COURSES = ['CZ1001', 'CZ2001']

export const getAllCourses = (): Promise<string[]> => {
  return ApiService.post(COURSES_ENDPOINT)
    .then(({ data }) => data)
    .catch(() => MOCK_COURSES)
}
