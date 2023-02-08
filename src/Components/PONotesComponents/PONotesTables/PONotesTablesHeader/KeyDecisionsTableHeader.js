import React from 'react'
import { Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import PONotesInformationModel from './PONotesInformationModel';
import PONotesTableTheme from '../../../Theme/GlobalTheme';

export default function KeyDecisionsHeader(props) {
  // countOfItems is the number of items in the table
  const { countOfItems } = props;
  // heading is the heading of the information model
  const heading = 'Key Decisions';
  // definition is the definition of the information model
  const definition = ' are the vital outcomes/decisions from the various discussions that PO has been part of.';
  // accessibiltyInformation is the accessibility information of the information model
  const accessibiltyInformation = '  PO is the owner of this section only PO can add or edit these entries.';
  return (
    <ThemeProvider theme={PONotesTableTheme}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant='h6' >
          KEY DECISIONS
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
KeyDecisionsHeader.propTypes = {
  countOfItems: PropTypes.number.isRequired
}
