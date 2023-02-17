import React from 'react';
import { Box } from '@mui/material';
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
    <Box
      sx={{
        display: 'flex', flexDirection: 'row', flexWrap: 'nowrap',
        gap: '5vh', justifyContent: 'space-around', padding: '50px 50px 50px 50px'
      }}>

      {/* Table for action items */}
      <PONotesTable heading={actionItems.heading}
        checkBox
        definition={actionItems.definition}
        accessibilityInformation={actionItems.accessibilityInformation}
        query={query} />

      {/* Table for key decisions */}
      <PONotesTable heading={keyDecisions.heading}
        checkBox={false}
        definition={keyDecisions.definition}
        accessibilityInformation={keyDecisions.accessibilityInformation}
        query={query} />

      {/* Table for agenda items */}
      <PONotesTable
        heading={agendaItems.heading}
        checkBox
        definition={agendaItems.definition}
        accessibilityInformation={agendaItems.accessibilityInformation}
        query={query} />

    </Box>
  );
}