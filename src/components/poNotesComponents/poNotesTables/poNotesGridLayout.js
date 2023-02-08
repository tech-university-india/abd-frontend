import React from 'react';
import Grid from '@mui/material/Grid';

import ActionItemsTable from './actionItemsTable';
import KeyDecisionTable from './keyDecisionsTable';
import AgendaItemsTable from './agendaItemsTable';

export default function GridArea() {
  return (
    <Grid container spacing={4} columns={20}>
      <Grid item xs='auto' > </Grid>
      <Grid sx={{
        p: 6,
        m: 1,
        display: 'flex',
        flexDirection: 'row'
      }} item xs={6}>
        <ActionItemsTable />
      </Grid>
      <Grid sx={{
        p: 6,
        m: 1,
        display: 'flex',
        flexDirection: 'row'
      }} item xs={6}>
        <KeyDecisionTable />
      </Grid>
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