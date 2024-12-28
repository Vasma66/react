import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Api = () => {
    var [user, setuser] = useState([])
    axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            console.log(response.data)
            setuser(response.data)
    
    })
  return (
      <div>
          <TableContainer component={Paper}>
              <Table border='2'>
                  <TableHead>
                      <TableRow>
                          <TableCell align="center"><b>NAME</b></TableCell>
                          <TableCell align="center"><b>USERNAME</b></TableCell>
                          <TableCell align="center"><b>CITY</b></TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {user.map((val) => {
                          return (
                              <TableRow>
                                  <TableCell align="center" >{val.name}</TableCell>
                                  <TableCell align="center">{val.username}</TableCell>
                                  <TableCell align="center" >{val.address.city}</TableCell>
                              </TableRow>
                          )
                      })}
                  </TableBody>
              </Table>
          </TableContainer>
          
        
    </div>
  )
}

export default Api