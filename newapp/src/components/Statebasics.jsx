import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
    var [name, setname] = useState(" ALL")
    var [nval,sval]=useState()
    const setval = (e) => {
        console.log(e.target.value)
        setname(e.target.value)
    }
    const SubHandler = () => {
        sval(name)
    }
    
    
  return (
      <div>
          <Typography variant='h3'>HEY{nval}</Typography><br></br>
          <TextField variant='outlined' onChange={setval} /><br /><br />
          <Button variant='contained' onClick={SubHandler} color='inherit'>CHANGE</Button>

    </div>
  )
}

export default Statebasics