import axios from 'axios';
import React, { useEffect, useState } from 'react';
//import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Tables: React.FC<{}> = () => {
  const [value, setValue] = useState([]);
  const getData = async () => {
    const data = await axios.get(
      'https://crudcrud.com/api/0a849da27c6c470481a0ccf0a502ec29/user'
    );
    console.log('BBBBBBBBBB', data);
    setValue(data.data);
  };
  const addData = async () => {
    return await axios.post(
      'https://crudcrud.com/api/0a849da27c6c470481a0ccf0a502ec29/user',
      { name: 'boopathi', id: 1 }
    );
  };
  const deleteData = async () => {
    return await axios.delete(
      'https://crudcrud.com/api/0a849da27c6c470481a0ccf0a502ec29/1'
    );
  };
  const updateData = async () => {
    return await axios.put(
      'https://crudcrud.com/api/0a849da27c6c470481a0ccf0a502ec29/1',
      {
        name: `boopathi peramachi`,
        id: 1,
      }
    );
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 350 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Id</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[{ name: 'boopathi', id: 2 }].map((row) => (
            <TableRow>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tables;
