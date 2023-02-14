import React from 'react';
import { Box } from '@mui/material';

import DSMHeader from '../dsmComponents/DSMHeader';
import DSMBody from '../dsmComponents/DSMBody';

export default function HomeContainer() {
  return (
    <Box>
      <DSMHeader/>
      <DSMBody/>
    </Box>
  );;
}