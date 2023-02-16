import React from 'react';
import { Box } from '@mui/material';

import DSMHeader from '../dsm/DSMHeader';
import DSMBody from '../dsm/DSMBody';

export default function HomeContainer() {
  return (
    <Box>
      <DSMHeader/>
      <DSMBody/>
    </Box>
  );;
}