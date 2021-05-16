import { Box, ChakraProvider, Grid, theme } from '@chakra-ui/react'
import * as React from 'react'

import { ColorModeSwitcher } from '../ColorModeSwitcher'

import { AppRouter } from './AppRouter'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <AppRouter />
      </Grid>
    </Box>
  </ChakraProvider>
)
