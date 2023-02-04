import React from 'react';
import { Box } from '@mui/material';
import CustomCard from './customCard';
import actionItems from '../../dummy/poNotesData';

export default function CardLayout(props) {
  return (
    <Box>
      {
        actionItems.map((actionItem) => {
          // eslint-disable-next-line react/destructuring-assignment, react/prop-types
          const combinedProp = { ...actionItem, 'colour': props.colour, 'chckBox': props.chckBox };
          return <CustomCard {...combinedProp} />
        })
      }
    </Box>
  );
}
