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

import { ROUTES } from 'constants/routes'

interface FormData {
  email: string
}

const useAuth = () => ({
  submitOtp: (_formData: FormData) => ({}),
  verifyOtp: (_: string) => Promise.resolve(true),
})

interface LoginFormProps {
  onLogin: () => void
}

export const LoginForm = ({ onLogin }: LoginFormProps): JSX.Element => {
  const { register, handleSubmit } = useForm<FormData>()
  // TODO: hook this into AuthContext once backend is set up
  const { submitOtp } = useAuth()
  const onSubmit = (formData: FormData) => {
    submitOtp(formData)
    onLogin()
  }

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
