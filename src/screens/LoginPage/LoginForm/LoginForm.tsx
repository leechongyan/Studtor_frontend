import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import PasswordInput from 'components/PasswordInput'
import { ROUTES } from 'constants/routes'

interface FormData {
  username: string
  password: string
}

export const LoginForm = (): JSX.Element => {
  const { register, handleSubmit } = useForm<FormData>()
  // TODO: hook this into AuthContext once backend is set up
  const onSubmit = (data: FormData) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex alignItems="flex-start" flexDirection="column" as={VStack}>
        <Heading>Login</Heading>
        <FormControl isRequired>
          <FormLabel>Username</FormLabel>
          <Input
            {...register('username')}
            isRequired
            placeholder="Enter your username"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <PasswordInput {...register('password')} />
        </FormControl>
        <HStack>
          <Button type="submit">Login</Button>
          <Button as={Link} to={ROUTES.SIGNUP}>
            Sign up
          </Button>
        </HStack>
      </Flex>
    </form>
  )
}
