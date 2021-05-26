import _ from 'lodash'
import { Course } from 'typings/course'

export const findMatchedCourses = (
  matchedCourses: Array<string>,
  courses: Array<Course>,
): Array<Course> =>
  _(courses)
    .filter(({ courseCode }) => matchedCourses.includes(courseCode))
    .value()
