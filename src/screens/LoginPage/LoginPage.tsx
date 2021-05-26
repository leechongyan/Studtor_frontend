import { Box, HStack, Image, useToast, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useHistory } from 'react-router'

import loginLogo from 'assets/login.svg'
import axios from 'axios'
import { useAuth } from 'contexts/AuthContext'
import { ResultAsync } from 'neverthrow'
import { LoginDetails } from 'typings'

import { createToastFromAxiosError } from '../../utils/api'

import LoginForm from './LoginForm'
import OtpForm from './OtpForm'

// TODO: add type to model state
export const LoginPage = (): JSX.Element => {
  const [isLogin, setIsLogin] = useState(true)
  const toast = useToast()
  const { login } = useAuth()
  const history = useHistory()

  return (
    <Box>
      <HStack>
        <Image src={loginLogo} />
        <Box pl="24" borderRadius="8">
          {/* TODO: Find a nice colour and style it so it looks cool */}
          <VStack>
            <Box boxShadow="lg" p="8" borderRadius="12">
              {isLogin ? (
                <LoginForm
                  onLogin={async (loginDetails: LoginDetails) => {
                    ResultAsync.fromPromise(login(loginDetails), (error) => {
                      if (axios.isAxiosError(error)) {
                        toast(createToastFromAxiosError(error))
                      } else {
                        toast({
                          title:
                            'Something went wrong. Please refresh and try again',
                        })
                      }
                    })
                      .map(() => history.push('/home'))
                      // ! TODO: Remove when FE confirms typings
                      .mapErr(() => history.push('/home'))
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
