import {Button,TextField,Typography } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
      <div>
          <Typography variant="h3">SIGNUP PAGE</Typography><br/>
          <TextField label="username" variant='filled' /> <br/><br/>
          <TextField label="password" variant='filled' /> <br/><br/>
          <Button variant='contained'>Signup</Button>
      
    </div>
  )
}

export default Signup