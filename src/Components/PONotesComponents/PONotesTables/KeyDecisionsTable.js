import React from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Box } from '@mui/material';

import KeyDecisionsTableHeader from './poNotesTablesHeader/KeyDecisionsTableHeader';
import CardLayout from '../../cards/CardLayout';

export default function KeyDecisionsTable() {
  return (
    <Box sx={{ width: '600px' }}>
      <TableContainer component={Paper}>
        <Table stickyHeader aria-label='simple table'>
          <TableHead>
            <TableRow align='center'>
              {/* calling the action item table header and passing count of action items in the table as props in countOfItems variable */}
              <TableCell><KeyDecisionsTableHeader countOfItems={0} /></TableCell>
            </TableRow>
          </TableHead>
          <TableBody >
            <TableRow> <CardLayout chckBox type='key_decisions' /> </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
