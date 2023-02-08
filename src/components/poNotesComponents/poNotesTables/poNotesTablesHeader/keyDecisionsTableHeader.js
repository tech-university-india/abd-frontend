import React from 'react'
import { ThemeProvider, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

import theme from '../../../themes/globalTheme';
import PONotesInformationModel from './poNotesInformationModel'

export default function KeyDecisionsHeader(props) {
  const { countOfItems } = props;
  const heading = 'Key Decisions';
  const definition = ' are the vital outcomes/decisions from the various discussions that PO has been part of.';
  const accessibiltyInformation = 'PO is the owner of this section only PO can add or edit these entries.';

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center'
      }} >
        <Typography sx={{
          fontFamily: 'Roboto', fontSize: '18px', lineHeight: '20px', color: "primary.contrastText", paddingRight: '5px'
        }}>
          KEY DECISIONS
          ({countOfItems})
        </Typography>
        <PONotesInformationModel heading={heading}
          definition={definition}
          accessibiltyInformation={accessibiltyInformation} />
      </Box>
    </ThemeProvider>
  )
}

KeyDecisionsHeader.propTypes = {
  countOfItems: PropTypes.number.isRequired
}