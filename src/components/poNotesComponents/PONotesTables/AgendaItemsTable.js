import React from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Box } from '@mui/material';

import AgendaItemsTableHeader from './PONotesTablesHeader/AgendaItemsTableHeader'
import CardLayout from '../../Cards/CardLayout';

function AgendaItemsTable() {
  return (
    <Box sx={{ width: '600px' }}>
      <TableContainer sx={{
        background: '#EEF2F5',
        height: '725px',
        maxHeight: '1000px',
        Width: '500px',
        width: '100%',
        flexGrow: -5
      }}
        component={Paper}  >
        <Table stickyHeader aria-label='simple table'>
          <TableHead>
            <TableRow align='center'>
              <TableCell align='center' sx={{
                backgroundColor: '#051C2C',
                borderradius: '0px',
                color: '#FFFFFF'
              }}><AgendaItemsTableHeader countOfItems={0} /></TableCell>
            </TableRow>
          </TableHead>
          <TableBody >
            <TableRow> <CardLayout colour='#FEA946' chckBox  urlLink='https://my-json-server.typicode.com/kartik162000/mockData/db'/> </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AgendaItemsTable;