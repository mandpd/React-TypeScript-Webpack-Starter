import { Counter } from './Counter'
import Button from '@mui/material/Button'
import { styled } from '@mui/system'

const Styling = styled('div')({
  color: 'darkslategrey',
  backgroundColor: 'aliceblue',
  padding: 8,
  borderRadius: 4,
  fontFamily: 'Roboto',
})

export const App = () => {
  return (
    <>
      <Button variant="contained" color="primary">
        Hello Mark
      </Button>
      <Styling>
        <Counter />
      </Styling>
    </>
  )
}
