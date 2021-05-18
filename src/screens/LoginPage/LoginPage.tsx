import { Box, HStack, Image, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useHistory } from 'react-router'

import LoginLogo from 'assets/login.svg'
import { useAuth } from 'contexts/AuthContext'
import { LoginDetails } from 'typings'

import LoginForm from './LoginForm'
import OtpForm from './OtpForm'

// TODO: add type to model state
export const LoginPage = (): JSX.Element => {
  const [isLogin, setIsLogin] = useState(true)
  const { login } = useAuth()
  const history = useHistory()

  return (
    <Box>
      <HStack>
        <Image src={LoginLogo} />
        <Box pl="24" borderRadius="8">
          {/* TODO: Find a nice colour and style it so it looks cool */}
          <VStack>
            <Box boxShadow="lg" p="8" borderRadius="12">
              {isLogin ? (
                <LoginForm
                  onLogin={async (loginDetails: LoginDetails) => {
                    const token = await login(loginDetails)
                    // Redirect to homepage if the token is valid
                    if (!!token) {
                      history.push('/home')
                    }
                  }}
                  onClickSignUp={() => setIsLogin(false)}
                />
              ) : (
                <OtpForm onVerify={() => setIsLogin(true)} />
              )}
            </Box>
          </VStack>
        </Box>
      </HStack>
    </Box>
  )
}
