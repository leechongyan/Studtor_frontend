import { Course } from '../typings/course'

import { ApiService } from './ApiService'

const COURSES_ENDPOINT = 'courses'
const MOCK_COURSES: Course[] = [
  {
    courseCode: 'CZ3001',
    courseTitle: 'HCI',
    numStudents: 0,
    numTutors: 1,
  },
  {
    courseCode: 'LB1423',
    courseTitle: 'wad',
    numStudents: 3,
    numTutors: 1,
  },
  {
    courseCode: 'MH9823',
    courseTitle: 'meth and math',
    numStudents: 40,
    numTutors: 1,
  },
  {
    courseCode: 'CZ3001',
    courseTitle: 'HCI',
    numStudents: 0,
    numTutors: 1,
  },
  {
    courseCode: 'LB1423',
    courseTitle: 'wad',
    numStudents: 3,
    numTutors: 1,
  },
  {
    courseCode: 'MH9823',
    courseTitle: 'meth and math',
    numStudents: 40,
    numTutors: 1,
  },
  {
    courseCode: 'CZ3001',
    courseTitle: 'HCI',
    numStudents: 0,
    numTutors: 1,
  },
  {
    courseCode: 'LB1423',
    courseTitle: 'wad',
    numStudents: 3,
    numTutors: 1,
  },
  {
    courseCode: 'MH9823',
    courseTitle: 'meth and math',
    numStudents: 40,
    numTutors: 1,
  },
  {
    courseCode: 'CZ3001',
    courseTitle: 'HCI',
    numStudents: 0,
    numTutors: 1,
  },
  {
    courseCode: 'LB1423',
    courseTitle: 'wad',
    numStudents: 3,
    numTutors: 1,
  },
  {
    courseCode: 'MH9823',
    courseTitle: 'meth and math',
    numStudents: 40,
    numTutors: 1,
  },
  {
    courseCode: 'CZ3001',
    courseTitle: 'HCI',
    numStudents: 0,
    numTutors: 1,
  },
  {
    courseCode: 'LB1423',
    courseTitle: 'wad',
    numStudents: 3,
    numTutors: 1,
  },
  {
    courseCode: 'MH9823',
    courseTitle: 'meth and math',
    numStudents: 40,
    numTutors: 1,
  },
  {
    courseCode: 'CZ3001',
    courseTitle: 'HCI',
    numStudents: 0,
    numTutors: 1,
  },
  {
    courseCode: 'LB1423',
    courseTitle: 'wad',
    numStudents: 3,
    numTutors: 1,
  },
  {
    courseCode: 'MH9823',
    courseTitle: 'meth and math',
    numStudents: 40,
    numTutors: 1,
  },
  {
    courseCode: 'CZ3001',
    courseTitle: 'HCI',
    numStudents: 0,
    numTutors: 1,
  },
  {
    courseCode: 'LB1423',
    courseTitle: 'wad',
    numStudents: 3,
    numTutors: 1,
  },
  {
    courseCode: 'MH9823',
    courseTitle: 'meth and math',
    numStudents: 40,
    numTutors: 1,
  },
  {
    courseCode: 'CZ3001',
    courseTitle: 'HCI',
    numStudents: 0,
    numTutors: 1,
  },
  {
    courseCode: 'LB1423',
    courseTitle: 'wad',
    numStudents: 3,
    numTutors: 1,
  },
  {
    courseCode: 'MH9823',
    courseTitle: 'meth and math',
    numStudents: 40,
    numTutors: 1,
  },
  {
    courseCode: 'CZ3001',
    courseTitle: 'HCI',
    numStudents: 0,
    numTutors: 1,
  },
  {
    courseCode: 'LB1423',
    courseTitle: 'wad',
    numStudents: 3,
    numTutors: 1,
  },
  {
    courseCode: 'MH9823',
    courseTitle: 'meth and math',
    numStudents: 40,
    numTutors: 1,
  },
  {
    courseCode: 'CZ3001',
    courseTitle: 'HCI',
    numStudents: 0,
    numTutors: 1,
  },
  {
    courseCode: 'LB1423',
    courseTitle: 'wad',
    numStudents: 3,
    numTutors: 1,
  },
  {
    courseCode: 'MH9823',
    courseTitle: 'meth and math',
    numStudents: 40,
    numTutors: 1,
  },
  {
    courseCode: 'CZ3001',
    courseTitle: 'HCI',
    numStudents: 0,
    numTutors: 1,
  },
  {
    courseCode: 'LB1423',
    courseTitle: 'wad',
    numStudents: 3,
    numTutors: 1,
  },
  {
    courseCode: 'MH9823',
    courseTitle: 'meth and math',
    numStudents: 40,
    numTutors: 1,
  },
]

export const getAllCourses = (): Promise<Course[]> => {
  return ApiService.get(COURSES_ENDPOINT)
    .then(({ data }) => data)
    .catch(() => MOCK_COURSES)
}
