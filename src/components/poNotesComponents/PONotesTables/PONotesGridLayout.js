import * as React from 'react';
import Grid from '@mui/material/Grid';

import ActionItemsTable from './ActionItemsTable';
import KeyDecisionTable from './KeyDecisionsTable';
import AgendaItemsTable from './AgendaItemsTable';

export default function PONotesGridLayout() {
  return (
    // using grid to layout the tables and making it responsive
    <Grid container spacing={5} columns={20}>
      <Grid item xs='auto' > </Grid>
      {/* grid for action items table */}
      <Grid sx={{
        p: 6,
        m: 1,
        display: 'flex',
        flexDirection: 'row'
      }} item xs={6}>
        <ActionItemsTable />
      </Grid>
      {/* grid for key decisions table */}
      <Grid sx={{
        p: 6,
        m: 1,
        display: 'flex',
        flexDirection: 'row'
      }} item xs={6}>
        <KeyDecisionTable />
      </Grid>
      {/* grid for agenda items table */}
      <Grid sx={{
        p: 6,
        m: 1,
        display: 'flex',
        flexDirection: 'row'
      }} item xs={6}>
        <AgendaItemsTable />
      </Grid>
      <Grid item xs='auto'> </Grid>
    </Grid>
  );
}









