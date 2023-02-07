import * as React from 'react';
import PropTypes from 'prop-types';

import Grid from '@mui/material/Grid';

import ActionItemsTable from './actionItemsTable';
import KeyDecisionTable from './keyDecisionsTable';
import AgendaItemsTable from './agendaItemsTable';


// TODO MAKE ONLY ONE REUSABLE COMPONENT FOR CONTAINING VARIOUS NOTES 

export default function GridArea({ searchQuery }) {
  return (

    <Grid container spacing={4} columns={20}>
      <Grid item xs='auto' > </Grid>
      <Grid sx={{
        p: 6,
        m: 1,
        display: 'flex',
        flexDirection: 'row'
      }} item xs={6}>
        <ActionItemsTable searchQuery = {searchQuery}/>
      </Grid>
      <Grid sx={{
        p: 6,
        m: 1,
        display: 'flex',
        flexDirection: 'row'
      }} item xs={6}>
        <KeyDecisionTable searchQuery = {searchQuery}/>
      </Grid>
      <Grid sx={{
        p: 6,
        m: 1,
        display: 'flex',
        flexDirection: 'row'
      }} item xs={6}>
        <AgendaItemsTable searchQuery = {searchQuery} />
      </Grid>
      <Grid item xs='auto'> </Grid>
    </Grid>

  );
}

GridArea.propTypes = {
  searchQuery: PropTypes.string.isRequired
}