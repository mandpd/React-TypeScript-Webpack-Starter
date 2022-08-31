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

interface ButtonProps {
  /**
   * Optional click handler
   */
  label: string
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const MyButton = ({ label, ...props }: ButtonProps) => {
  return (
    <Grid container spacing={1}>
      <Button variant="contained" {...props}>
        {label}
      </Button>
    </Grid>
  )
}
