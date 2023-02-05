import React from 'react'
import { Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import PONotesInformationModel from './PONotesInformationModel'
import PONotesTableTheme from '../../../Theme/globalTheme'

export default function AgendaItemsTableHeader(props) {
  // countOfItems is the number of items in the table
  const { countOfItems } = props;
  // heading is the heading of the information model
  const heading = 'Agenda Items';
  // definition is the definition of the information model
  const definition = ' are the questions that the PO wanted to ask  the team members and the  leadership to derive some actions or decisions.'
  // accessibiltyInformation is the accessibility information of the information model
  const accessibiltyInformation = '  PO is the owner of this section only PO can add or edit these entries.';
  return (
    <ThemeProvider theme={PONotesTableTheme}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant='h6' >
          AGENDA ITEMS
          ({countOfItems})
        </Typography>
        {/* The information model displaying the information about Action Item is called here and information 
      about Action items (heading, definition and accessibility information) are passed as props */}
        <PONotesInformationModel heading={heading}
          definition={definition}
          accessibiltyInformation={accessibiltyInformation} />
      </Box>
    </ThemeProvider>
  )
}
// props validation
AgendaItemsTableHeader.propTypes = {
  countOfItems: PropTypes.number.isRequired
}
