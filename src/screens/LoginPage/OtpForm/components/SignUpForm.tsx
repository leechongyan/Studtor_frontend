import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  useToast,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form'

import axios from 'axios'
import PasswordInput from 'components/PasswordInput'
import { useAuth } from 'contexts/AuthContext'
import { ResultAsync } from 'neverthrow'
import { SignupDto } from 'typings'

import { createToastFromAxiosError } from '../../../../utils/api'

type FormData = SignupDto

interface SignUpProps {
  onClick: () => void
}

// TODO: check error then carry on to next stage or fail
export const SignUpForm = ({ onClick }: SignUpProps): JSX.Element => {
  const { register, handleSubmit } = useForm<FormData>()
  const toast = useToast()
  // TODO: hook this into AuthContext once backend is set up
  const { sendOtp } = useAuth()
  const onSubmit = (formData: FormData) => {
    ResultAsync.fromPromise<string, unknown>(sendOtp(formData), (error) => {
      if (axios.isAxiosError(error)) {
        toast(createToastFromAxiosError(error))
      } else {
        toast({
          title: 'Something went through. Please refresh adn try again later.',
        })
      }
    })
      .map(() => onClick())
      // ! TODO: remove when not needed
      .mapErr(() => onClick())
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex alignItems="flex-start" flexDirection="column" as={VStack}>
        <Heading>Verify Otp</Heading>
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
          <PasswordInput
            {...register('password')}
            isRequired
            placeholder="Enter your password"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            {...register('email')}
            isRequired
            placeholder="Enter your email"
          />
        </FormControl>
        <HStack>
          <FormControl isRequired>
            <FormLabel>First Name</FormLabel>
            <Input
              {...register('firstName')}
              isRequired
              placeholder="Enter your first name"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Last Name</FormLabel>
            <Input
              {...register('lastName')}
              isRequired
              placeholder="Enter your last name"
            />
          </FormControl>
        </HStack>
        <HStack>
          <Button type="submit">Verify</Button>
        </HStack>
      </Flex>
    </form>
  )
}
