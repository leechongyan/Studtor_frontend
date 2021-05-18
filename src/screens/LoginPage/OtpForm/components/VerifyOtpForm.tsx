import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  PinInput,
  PinInputField,
  useToast,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form'

import axios from 'axios'
import { useAuth } from 'contexts/AuthContext'
import _ from 'lodash'
import { ResultAsync } from 'neverthrow'

import { createToastFromAxiosError } from '../../../../utils/api'

interface VerifyOtpProps {
  onVerify: () => void
}

export const VerifyOtpForm = ({ onVerify }: VerifyOtpProps): JSX.Element => {
  const { register, handleSubmit } = useForm<FormData>()
  // TODO: hook this into AuthContext once backend is set up
  const { verifyOtp } = useAuth()
  const toast = useToast()
  const onSubmit = (otpObject: Record<number, string>) => {
    const otp = _.values(otpObject).join('')
    ResultAsync.fromPromise(verifyOtp(otp), (error) => {
      if (axios.isAxiosError(error)) {
        toast(createToastFromAxiosError(error))
      } else {
        toast({ title: 'Something went wrong, please try again later' })
      }
    })
      .map(() => onVerify())
      // ! TODO: Remove when backend is up
      .mapErr(() => onVerify())
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex alignItems="flex-start" flexDirection="column" as={VStack}>
        <Heading>Verify Otp</Heading>
        <FormControl isRequired>
          <FormLabel>OTP</FormLabel>
          <PinInput>
            {_.range(6).map((id) => (
              <PinInputField {...register(`${id}`)} />
            ))}
          </PinInput>
        </FormControl>
        <HStack>
          <Button type="submit">Verify</Button>
        </HStack>
      </Flex>
    </form>
  )
}
