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

import { useAuth } from 'contexts/AuthContext'
import { LoginDetails } from 'typings'

import { PasswordInput } from '../../../components/PasswordInput/PasswordInput'

interface LoginFormProps {
  onLogin: (loginDetails: LoginDetails) => Promise<void>
  onClickSignUp: () => void
}

export const LoginForm = ({
  onLogin,
  onClickSignUp,
}: LoginFormProps): JSX.Element => {
  const { register, handleSubmit } = useForm<FormData>()
  // TODO: hook this into AuthContext once backend is set up
  const onSubmit = (formData: LoginDetails) => onLogin(formData)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex alignItems="flex-start" flexDirection="column" as={VStack}>
        <Heading>Login</Heading>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            {...register('email')}
            isRequired
            placeholder="Enter your email"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <PasswordInput
            {...register('password')}
            isRequired
            placeholder="Enter your password"
          />
        </FormControl>
        <HStack>
          <Button type="submit">Login</Button>
          <Button onClick={onClickSignUp}>Sign up</Button>
        </HStack>
      </Flex>
    </form>
  )
}
