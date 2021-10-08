import { Box } from '@mui/material'
import { Dashboard } from 'Dashboard'
import { Header } from 'Header'

export const App = (): JSX.Element => (
  <Box width="100vw" height="100vh" overflow="hidden">
    <Header />
    <Dashboard />
  </Box>
)
