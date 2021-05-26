import { Box } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router'

import readingBackground from 'assets/reading.svg'
import { useGetUsers } from 'hooks/useUsers'
import { UserType } from 'typings'

import { Courses } from './Courses'

// const backgroundImage = <image src={readingBackground} />

/* 
1. Create a wrapper component to abstract over the type of the page being rendered 
2. On that course page, defer the handling of the specific type to a component 
3. Topmost component is responsible for recursively fetching data for the course (and feeding it into component from #2)
*/
export const CourseContainer = (): JSX.Element => {
  const { type: userType, courseCode } =
    useParams<{ type: UserType; courseCode: string }>()
  const { users } = useGetUsers(courseCode, userType)
  return (
    <Box
      backgroundImage={`url(${readingBackground})`}
      backgroundRepeat="no-repeat"
      backgroundSize="contain"
    >
      <Courses userType={userType} users={users} />
    </Box>
  )
}
