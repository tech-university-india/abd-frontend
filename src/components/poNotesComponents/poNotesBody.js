import * as React from 'react';
import PropTypes from 'prop-types';

import Grid from '@mui/material/Grid';
import GridArea from "./poNotesTables/poNotesGridLayout";

export default function PoNotesBody({ searchQuery }) {
  return (
    <Grid>
      <Grid sx={{
        minWidth: "100%",
        height: "100vh", backgroundColor: '#E6EEF2'
      }}>
        <GridArea searchQuery = {searchQuery} />
      </Grid>
    </Grid>
  )
}


PoNotesBody.propTypes = {
  searchQuery: PropTypes.string.isRequired
}