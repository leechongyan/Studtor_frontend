import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

import { Student } from './components/Student/Student'
import { Teacher } from './components/Teacher/Teacher'

// TODO: add a component for the header bar
// Component should have profile / logout
// This component fetches data from BE for the lower components
// And handles their positioning/formatting relative to each other.
// Step 1: Fetch required data from db
// Step 2: Render
export const HomePage = () => {
  // Split the layout into 2
  return (
    <Box p="8px">
      <Heading size="4xl">Studtor</Heading>
      <Flex justifyContent="space-between">
        <Box
          maxW="40%"
          _hover={{
            cursor: 'pointer',
          }}
        >
          <Student data={[]} onClick={() => console.log('hi')} />
        </Box>
        <Box
          maxW="40%"
          _hover={{
            cursor: 'pointer',
          }}
        >
          <Teacher data={[]} onClick={() => console.log('hi')} />
        </Box>
      </Flex>
    </Box>
  )
}
