import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, List, ListItem, TextField } from '@mui/material';

export default function Timeline({ isSubmit, timeline, setTimeline }) {
  const handleTimeline = (e) => {
    setTimeline(e.target.value);
  };
  return (
    <Box>
      <Typography sx={{ fontWeight: 700, marginLeft: '20px', marginTop: '20px' }}>Timeline</Typography>
      <List>
        <ListItem>
          <TextField id="datetime-local" label="Select date, time" type="datetime-local"
            disabled={isSubmit} defaultValue={timeline} sx={{ width: 350 }}
            InputLabelProps={{ shrink: true }} onChange={handleTimeline}
          />
        </ListItem>
      </List>
    </Box>
  );
}

Timeline.propTypes = {
  isSubmit: PropTypes.bool.isRequired,
  timeline: PropTypes.string.isRequired,
  setTimeline: PropTypes.func.isRequired
};