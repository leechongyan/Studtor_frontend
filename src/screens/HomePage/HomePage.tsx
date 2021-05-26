import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

import { SearchProvider } from 'contexts/SearchContext'

import { useCourses } from '../../hooks/useCourses'

import { Student } from './components/Student/Student'
import { Teacher } from './components/Teacher/Teacher'

// TODO: add a component for the header bar
// This component fetches data from BE for the lower components
// And handles their positioning/formatting relative to each other.
// Step 1: Fetch required data from db
// Step 2: Render
export const HomePage = () => {
  const { courses } = useCourses()

  return (
    <SearchProvider searchData={courses.map(({ courseCode }) => courseCode)}>
      <Box p="8px">
        <Heading size="4xl">Studtor</Heading>
        <Flex justifyContent="space-between">
          <Box
            maxW="40%"
            _hover={{
              cursor: 'pointer',
            }}
          >
            <Student data={courses} />
          </Box>
          <Box
            maxW="40%"
            _hover={{
              cursor: 'pointer',
            }}
          >
            <Teacher data={courses} />
          </Box>
        </Flex>
      </Box>
    </SearchProvider>
  )
}
