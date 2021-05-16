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

interface FormData {
  otp: string
}

const useAuth = () => ({
  submitOtp: (_formData: FormData) => ({}),
  verifyOtp: (_: string) => Promise.resolve(true),
})

export const OtpForm = (): JSX.Element => {
  const { register, handleSubmit } = useForm<FormData>()
  // TODO: hook this into AuthContext once backend is set up
  const { verifyOtp } = useAuth()
  const onSubmit = (formData: FormData) => {
    verifyOtp(formData.otp)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex alignItems="flex-start" flexDirection="column" as={VStack}>
        <Heading>Verify Otp</Heading>
        <FormControl isRequired>
          <FormLabel>OTP</FormLabel>
          {/* TODO: add validation so as to restrict to 6 digits */}
          <Input {...register('otp')} isRequired placeholder="Enter your otp" />
        </FormControl>
        <HStack>
          <Button type="submit">Verify</Button>
        </HStack>
      </Flex>
    </form>
  )
}
