import React from 'react';
import { Box } from '@mui/material';
import { useOktaAuth } from '@okta/okta-react';

import DSMHeader from '../dsm/DSMHeader';
import DSMBody from '../dsm/DSMBody';

import { DSMBodyLayoutProvider } from '../contexts/DSMBodyLayoutContext';


export default function HomeContainer() {
  const { authState } = useOktaAuth();
  console.log('authState', authState.accessToken.accessToken);
  return (
    <Box>
      <DSMHeader />
      <DSMBodyLayoutProvider>
        <DSMBody />
      </DSMBodyLayoutProvider>
    </Box>
  );
}