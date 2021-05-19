import { Box, Image, Input, Tooltip, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'

import studentLogo from 'assets/student.svg'
import { ROUTES } from 'constants/routes'
import { useSearch } from 'contexts/SearchContext'
import { Course } from 'typings/course'

import { findMatchedCourses } from '../../utils'
import { CourseTable } from '../CourseTable/CourseTable'
import ListDisplayModal from '../ListDisplayModal'

interface StudentProps {
  data: Course[]
}

export const Student = ({ data: courses }: StudentProps): JSX.Element => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const { searchFor: searchForCourseCodes } = useSearch()
  const [searchedTerm, setSearchedTerm] = useState<string>('')
  const history = useHistory()

  useEffect(() => {
    setSearchedTerm('')
  }, [isOpen])

  const onCourseClick = (courseCode: string) =>
    history.push(`${ROUTES.COURSE}/student/${courseCode}`)

  return (
    <>
      <Tooltip label="Be a student" placement="right">
        <Box p="8" boxShadow="lg" borderRadius="24px" onClick={onOpen}>
          <Image src={studentLogo} />
        </Box>
      </Tooltip>
      <ListDisplayModal
        title="Find a teacher"
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
