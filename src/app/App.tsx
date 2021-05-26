import { Box, ChakraProvider, Grid, theme } from '@chakra-ui/react'
import * as React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from 'contexts/AuthContext'

import { ColorModeSwitcher } from '../ColorModeSwitcher'

import { AppRouter } from './AppRouter'

const queryClient = new QueryClient()

export const App = (): JSX.Element => (
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Box textAlign="center" fontSize="xl">
            <Grid minH="100vh" p={3}>
              <ColorModeSwitcher justifySelf="flex-end" />
              <AppRouter />
            </Grid>
          </Box>
        </AuthProvider>
      </QueryClientProvider>
    </ChakraProvider>
  </BrowserRouter>
)
