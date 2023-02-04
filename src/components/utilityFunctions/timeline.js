import React from 'react';
import PropTypes from 'prop-types';
import { Box,Typography,List,ListItem,TextField } from '@mui/material';

function Timeline({ isSubmit, timeline, setTimeline }){
    const handleTimeline = (e) => {
      setTimeline(e.target.value);
    };
    return (
        <Box>
          <Typography sx={{ fontWeight: 700, marginLeft: '20px', marginTop: '20px' }}>Timeline</Typography>
          <List>
            <ListItem>
              <TextField
                disabled={isSubmit}
                id="datetime-local"
                label="Select date, time"
                type="datetime-local"
                defaultValue={timeline}
                sx={{ width: 350 }}
                InputLabelProps={{ shrink: true }}
                onChange={handleTimeline}
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

export default Timeline;