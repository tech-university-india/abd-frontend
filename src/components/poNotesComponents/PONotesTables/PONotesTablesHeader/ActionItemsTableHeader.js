import React from 'react'
import { Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import PONotesInformationModel from './PONotesInformationModel'
import PONotesTableTheme from '../../../Theme/globalTheme'

export default function ActionItemsHeader(props) {
  // countOfItems is the number of items in the table
  const { countOfItems } = props;
  // heading is the heading of the information model
  const heading = 'Action Items';
  // definition is the definition of the information model
  const definition = ' are the tasks that the Product Owner(PO) has to do in order to unblock the team, and can be linked to an issue in the Project management tool such as Jira.';
  // accessibiltyInformation is the accessibility information of the information model
  const accessibiltyInformation = 'PO is the owner of this section only PO can add or edit these entries.';
  return (
    <ThemeProvider theme={PONotesTableTheme}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant='h6'>
          ACTION ITEMS
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
ActionItemsHeader.propTypes = {
  countOfItems: PropTypes.number.isRequired
}