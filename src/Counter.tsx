import { useState } from 'react'
import Button from '@mui/material/Button'

export const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>Update the count and edit src/App.tsx, state is preserved</p>
      <Button variant="contained" onClick={() => setCount((c) => c + 1)}>
        Count - {count}
      </Button>
    </div>
  )
}
