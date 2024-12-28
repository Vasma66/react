import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var [number, newnumber] = useState(0)
    const plus = () => {
        newnumber(number+1)
    }
    const minus = () => {
    newnumber(number-1)
    }
    
  return (
      <div>
          <h1>COUNTER</h1>
          <Typography variant='h3'>{number}</Typography><br></br>
          <Button variant='contained' color='inherit' onClick={plus}>PLUS</Button>&nbsp;&nbsp;
          <Button variant='contained' color='inherit' onClick={minus}>MINUS</Button>
    </div>
  )
}

export default Counter