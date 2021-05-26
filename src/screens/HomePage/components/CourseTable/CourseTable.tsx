import { Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

import { Course } from 'typings/course'

export interface CourseProps {
  data: Array<Course>

  onCourseRowClick: (courseCode: string) => void
}

const CourseItem = ({
  courseCode,
  courseTitle,
  numStudents,
  numTutors,
  onClick,
}: Course & {
  onClick: () => void
}) => (
  <Tr
    boxShadow="md"
    borderRadius="8px"
    py="36px"
    pl="40px"
    pr="25px"
    onClick={onClick}
    _hover={{
      cursor: 'pointer',
    }}
  >
    <Text as={Td} py="36px" fontWeight="bold">
      {courseCode}
    </Text>
    <Text as={Td} py="36px">
      {courseTitle}
    </Text>
    <Text py="36px" as={Td}>
      {`${numStudents} students`}
    </Text>
    <Text py="36px" as={Td}>
      {`${numTutors} tutors`}
    </Text>
  </Tr>
)

export const CourseTable = ({
  data,
  onCourseRowClick,
}: CourseProps): JSX.Element => {
  return (
    <Table sx={{ borderSpacing: '0 30px', borderCollapse: 'separate' }}>
      <Thead>
        <Tr>
          <Th>Course Code</Th>
          <Th>Course Title</Th>
          <Th isNumeric>Students</Th>
          <Th isNumeric>Tutors</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((item) => (
          <CourseItem
            {...item}
            onClick={() => onCourseRowClick(item.courseCode)}
          />
        ))}
      </Tbody>
    </Table>
  )
}
