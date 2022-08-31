import { Button, createTheme, Grid } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#0E9E57', // success main
      dark: '#0A703E', // success dark
      light: '#12CE72', // success light
    },
  },
})

/**
 * Primary UI component for user interaction
 */
export const MyButton = () => {
  return (
    <Grid container spacing={1}>
      <Button variant="contained" color="warning">
        Hi
      </Button>
    </Grid>
  )
}
