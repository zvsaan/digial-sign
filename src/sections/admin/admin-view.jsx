import React, { useState } from 'react';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Table, Paper, TableRow, TableBody, TableCell,  TableHead, IconButton, TableContainer } from '@mui/material';

function AdminView() {
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Doe', age: 25 },
    { id: 3, name: 'Alice', age: 35 },
  ]);

  const handleDelete = (id) => {
    const updatedData = data.filter(item => item.id !== id);
    setData(updatedData);
  };

  const handleEdit = (id) => {
    // Implement edit functionality
    console.log(`Edit item with id ${id}`);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>
                <IconButton onClick={() => handleEdit(row.id)} color="primary">
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(row.id)} color="secondary">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AdminView;