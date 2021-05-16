import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Image,
  Input,
  VStack,
} from '@chakra-ui/react'
import React from 'react'

import LoginLogo from 'assets/login.svg'

import LoginForm from './LoginForm'

// TODO: add type to model state
export const LoginPage = (): JSX.Element => {
  return (
    <Box>
      <HStack>
        <Image src={LoginLogo} />
        <Box>
          <VStack>
            <LoginForm />
          </VStack>
        </Box>
      </HStack>
    </Box>
  )
}
