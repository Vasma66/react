import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div>
          <AppBar color='inherit'>
              <Toolbar>
                
                  <Typography variant='h6' >My App</Typography>&nbsp;
                  <Link to='/login'>
                      <Button variant='contained' color='error'>Login</Button>
                  </Link>&nbsp;&nbsp;
                  <Link to='/signup'>
                      <Button variant='contained' color='error'>Sign In</Button>
                  </Link>&nbsp;&nbsp;
                  <Link to='/tbl'>
                      <Button variant='contained' color='error'>Table</Button>
                  </Link>&nbsp;&nbsp;
                  <Link to='/statebasics'>
                      <Button variant='contained' color='error'>Statebasics</Button>
                  </Link>&nbsp;&nbsp;
                  <Link to='/counter'>
                      <Button variant='contained' color='error'>COUNTER</Button>
                  </Link>&nbsp;&nbsp;
                  <Link to='/selection'>
                      <Button variant='contained' color='error'>SELECTION</Button>
                  </Link>&nbsp;&nbsp;
                  <Link to='/api'>
                      <Button variant='contained' color='error'>API</Button>
                  </Link>&nbsp;&nbsp;
                  <Link to='/product'>
                      <Button variant='contained' color='error'>PRODUCT</Button>
                  </Link>
             
              </Toolbar>
          </AppBar><br/><br/><br/><br/>
    </div>
  )
}

export default Navbar