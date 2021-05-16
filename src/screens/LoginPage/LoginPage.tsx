import { Box, HStack, Image, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

import LoginLogo from 'assets/login.svg'

import LoginForm from './LoginForm'
import OtpForm from './OtpForm'

// TODO: add type to model state
export const LoginPage = (): JSX.Element => {
  const [isWaitingForOtp, setIsWaiting] = useState(false)

  return (
    <Box>
      <HStack>
        <Image src={LoginLogo} />
        <Box>
          <VStack>
            {isWaitingForOtp ? (
              <OtpForm />
            ) : (
              <LoginForm onLogin={() => setIsWaiting(true)} />
            )}
          </VStack>
        </Box>
      </HStack>
    </Box>
  )
}
