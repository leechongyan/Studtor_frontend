import { Box, ChakraProvider, Grid, theme } from '@chakra-ui/react'
import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { ColorModeSwitcher } from '../ColorModeSwitcher'

import { AppRouter } from './AppRouter'

export const App = (): JSX.Element => (
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <AppRouter />
        </Grid>
      </Box>
    </ChakraProvider>
  </BrowserRouter>
)
