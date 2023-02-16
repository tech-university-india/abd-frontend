import React from 'react';
import Grid from '@mui/material/Grid';
import PONotesTable from './PONotesTable';
import { actionItems, keyDecisions, agendaItems } from '../../constants/PONotes';

export default function PONotesGridLayout(
) {
  // setting serach query based on { text, start date , end date and status }.
  const query = {
    // search: "a",
    // startDate: "2023-02-10",
    // endDate: "2023-02-10",
    // status: "DRAFT"
  }
  return (
    // grid layout for the three tables
    <Grid container spacing={5} columns={19} >
      <Grid item sx={1} />
      <Grid sx={{
        p: 6,
        m: 1,
        display: 'flex',
        flexDirection: 'row'
      }} item xs={6}>
        {/* Table for action items */}
        <PONotesTable heading={actionItems.heading}
          checkBox
          definition={actionItems.definition}
          accessibilityInformation={actionItems.accessibilityInformation}
          query={query} />
      </Grid>
      <Grid sx={{
        p: 6,
        m: 1,
        display: 'flex',
        flexDirection: 'row'
      }} item xs={6}>
        {/* Table for key decisions */}
        <PONotesTable heading={keyDecisions.heading}
          checkBox={false}
          definition={keyDecisions.definition}
          accessibilityInformation={keyDecisions.accessibilityInformation}
          query={query} />
      </Grid>
      <Grid sx={{
        p: 6,
        m: 1,
        display: 'flex',
        flexDirection: 'row'
      }} item xs={6}>
        {/* Table for agenda items */}
        <PONotesTable
          heading={agendaItems.heading}
          checkBox
          definition={agendaItems.definition}
          accessibilityInformation={agendaItems.accessibilityInformation}
          query={query} />
      </Grid>
      <Grid item sx={1} />
    </Grid>
  );
}