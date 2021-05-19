import { Box, Image, Input, Tooltip, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import teacherLogo from 'assets/teacher.svg'
import { ROUTES } from 'constants/routes'
import { useSearch } from 'contexts/SearchContext'
import { findMatchedCourses } from 'screens/HomePage/utils'

import { Course } from '../../../../typings/course'
import { CourseTable } from '../CourseTable/CourseTable'
import ListDisplayModal from '../ListDisplayModal'

interface TeacherProps {
  data: Course[]
}

export const Teacher = ({ data: courses }: TeacherProps): JSX.Element => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const { searchFor: searchForCourseCodes } = useSearch()
  const [searchedTerm, setSearchedTerm] = useState<string>('')
  const history = useHistory()

  useEffect(() => {
    setSearchedTerm('')
  }, [isOpen])

  const onCourseClick = (courseCode: string) =>
    history.push(`${ROUTES.COURSE}/tutor/${courseCode}`)

  return (
    <>
      <Tooltip label="Be a teacher" placement="right">
        <Box p="8" boxShadow="lg" borderRadius="24px" onClick={onOpen}>
          <Image src={teacherLogo} />
        </Box>
      </Tooltip>
      <ListDisplayModal
        title="Find a student"
        isOpen={isOpen}
        onClose={onClose}
      >
        <>
          <Input
            onChange={(event) => setSearchedTerm(event.target.value)}
            placeholder="Enter your course code"
          />
          <CourseTable
            onCourseRowClick={onCourseClick}
            data={findMatchedCourses(
              searchForCourseCodes(searchedTerm),
              courses,
            )}
          />
        </>
      </ListDisplayModal>
    </>
  )
}
