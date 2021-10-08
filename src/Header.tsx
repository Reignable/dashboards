import { AppBar, Toolbar, Typography } from '@mui/material'

function Header(): JSX.Element {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Dashboards!</Typography>
      </Toolbar>
    </AppBar>
  )
}

export { Header }
