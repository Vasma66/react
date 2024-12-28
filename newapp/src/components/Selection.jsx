import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Selection = () => {
    var [name, setname]= useState()
    const aysha = () => {
       setname("  AYSHA")
    }
    const anagha = () => {
        setname("  ANAGHA")
    }
    const vasma = () => {
        setname("  VASMA")
    }
    useEffect(() => {
        aysha()

    },[])
    
  return (
      <div>
          <Typography variant='h3'>WELCOME{name}</Typography><br></br>
          <Button variant='contained' color='inherit' onClick={aysha}>AYSHA</Button>&nbsp;&nbsp;
          <Button variant='contained' color='inherit' onClick={anagha}>ANAGHA</Button>&nbsp;&nbsp;
          <Button variant='contained' color='inherit' onClick={vasma}>VASMA</Button>
    </div>
  )
}

export default Selection