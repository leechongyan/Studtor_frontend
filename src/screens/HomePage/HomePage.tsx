import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'

import studentLogo from 'assets/student.svg'
import teacherLogo from 'assets/teacher.svg'

// TODO: add a component for the header bar
// Component should have profile / logout
// Step 1: Fetch required data from db
// Step 2: Render
export const HomePage = () => {
  // Split the layout into 2
  const { isOpen, onClose, onOpen } = useDisclosure()

  return (
    <Box p="8px">
      <Heading size="4xl" fontFamily="monospace">
        Studtor
      </Heading>
      <Flex justifyContent="space-between">
        <Box
          maxW="40%"
          _hover={{
            cursor: 'pointer',
          }}
          onClick={() => console.log('kek')}
        >
          <Box onClick={onOpen}>
            <Tooltip label="Be a student" placement="right">
              <Box p="8" boxShadow="lg" borderRadius="24px">
                <Image src={studentLogo} />
              </Box>
            </Tooltip>
          </Box>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>asdf</Text>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button variant="ghost">Secondary Action</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
        <Box maxW="40%">
          <Tooltip label="Be a teacher" placement="right">
            <Box p="8" boxShadow="lg" borderRadius="24px">
              <Image src={teacherLogo} />
            </Box>
          </Tooltip>
        </Box>
      </Flex>
    </Box>
  )
}
