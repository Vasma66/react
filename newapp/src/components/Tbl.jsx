import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Tbl = () => {
  return (
      <div>
          <TableContainer component={Paper}>
          <Table border='2'>
          <TableHead>
          <TableRow>
          <TableCell align="center"><b>DESSERT</b></TableCell>
          <TableCell align="center"><b>CALORIES</b></TableCell>
          <TableCell align="center"><b>FAT&nbsp;(g)</b></TableCell>
          <TableCell align="center"><b>CARBS&nbsp;(g)</b></TableCell>
          <TableCell align="center"><b>PROTEIN&nbsp;(g)</b></TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
                      <TableRow>
                          <TableCell align="center" >Frozen Yoghurt</TableCell>
                          <TableCell align="center">159</TableCell>
                          <TableCell align="center" >6</TableCell>
                          <TableCell align="center">24</TableCell>
                          <TableCell align="center">4</TableCell>
                      </TableRow>
                  </TableBody>
              </Table>
              </TableContainer>
                
        
        
    </div>
  )
}

export default Tbl