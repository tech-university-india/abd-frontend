import React from 'react'
import { Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import PONotesInformationModel from './PONotesInformationModel';
import PONotesTableTheme from '../../../theme/GlobalTheme';

export default function PONotesTableHeader(props) {
  // countOfItems is the number of items in the table
  const { countOfItems, definition, heading, accessibilityInformation } = props;

  return (
    <ThemeProvider theme={PONotesTableTheme}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant='h6'>
          {heading.toUpperCase()}{' '}
          ({countOfItems})
        </Typography>

        {/* The information model displaying the information about Action Item is called here and information 
      about Action items (heading, definition and accessibility information) are passed as props */}
        <PONotesInformationModel heading={heading}
          definition={definition}
          accessibiltyInformation={accessibilityInformation} />
      </Box>
    </ThemeProvider>
  )
}
// props validation
PONotesTableHeader.propTypes = {
  countOfItems: PropTypes.number.isRequired,
  definition: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  accessibilityInformation: PropTypes.string.isRequired,
}  