import React from 'react'
import { Typography, ThemeProvider } from '@mui/material';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

import theme from '../../../themes/globalTheme';
import PONotesInformationModel from './poNotesInformationModel'

export default function AgendaItemsTableHeader(props) {
  const { countOfItems } = props;
  const heading = 'Agenda Items';
  const definition = ' are the questions that the PO wanted to ask  the team members and the  leadership to derive some actions or decisions.'
  const accessibiltyInformation = '  PO is the owner of this section only PO can add or edit these entries.';

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center'
      }} >
        <Typography sx={{
          fontFamily: 'Roboto', fontSize: '18px', lineHeight: '20px', color: "primary.contrastText", paddingRight: '5px'
        }}>
          AGENDA ITEMS
          ({countOfItems})
        </Typography>
        <PONotesInformationModel heading={heading}
          definition={definition}
          accessibiltyInformation={accessibiltyInformation} />
      </Box>
    </ThemeProvider>
  )
}

AgendaItemsTableHeader.propTypes = {
  countOfItems: PropTypes.number.isRequired
}