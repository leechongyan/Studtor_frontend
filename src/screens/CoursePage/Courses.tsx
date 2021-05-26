import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Spacer,
} from '@chakra-ui/react'
import React from 'react'

import { User, UserType } from 'typings'

interface CoursesProps {
  users: User[]
  userType: UserType
}

/**
 * This is a list of accordions listing each course
 * on expand:
 * 1. left side is a card of the tutor details
 * 2. right side is calendar?
 */
export const Courses = ({ users, userType }: CoursesProps): JSX.Element => {
  return (
    <Accordion allowMultiple allowToggle>
      {users.map(({ name, email }) => {
        return (
          <AccordionItem borderWidth={0} border="none">
            <AccordionButton width="100%">
              <Box textAlign="left" mr="16px">
                {userType}
              </Box>
              <Box textAlign="left">{name}</Box>
              <Spacer />
              <Box mr="16px">{email}</Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>{userType}</AccordionPanel>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}
