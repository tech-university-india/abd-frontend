import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper
} from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';

import AgendaItemsTableHeader from './PONotesTablesHeader/ActionItemsTableHeader';
import PONotesTableTheme from '../../Theme/GlobalTheme';
import CardLayout from '../../Cards/CardLayout'

// table for the action items
export default function ActionItemsTable() {
  return (
    <Box sx={{ width: '600px' }}>
      <ThemeProvider theme={PONotesTableTheme}>
        <TableContainer component={Paper}>
          <Table stickyHeader aria-label='simple table'>
            <TableHead>
              <TableRow align='center'>
                {/* calling the action item table header and passing count of action items in the table as props in countOfItems variable */}
                <TableCell><AgendaItemsTableHeader countOfItems={0} /></TableCell>
              </TableRow>
            </TableHead>
            <TableBody >
            <TableRow> <CardLayout chckBox type='action_item'/> </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </ThemeProvider>
    </Box>

  )
}
