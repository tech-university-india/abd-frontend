import React, { useContext } from 'react';
import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DSMBodyLayoutContext } from "../contexts/DSMBodyLayoutContext"

export default function Announcements() {
  const { gridHeightState, dispatchGridHeight } = useContext(DSMBodyLayoutContext)
  const handleExpandAnnouncements = () => {
    dispatchGridHeight({ type: "ANNOUNCEMENT" })
  };

  return (
    <Grid item height={gridHeightState.announcement.height} >
      <Accordion expanded={gridHeightState.announcement.expanded} onChange={handleExpandAnnouncements} sx={{
        height: gridHeightState.announcement.expanded ? "100%" : "none",
      }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          {/* All Content/Development of Announcements HEADER goes here */}
          <Typography variant="dsmSubMain">Announcements</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* All Content/Development of Announcements BODY goes here */}
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </ Grid >
  );
};

// Announcements.propTypes = {
//   gridHeightState: PropTypes.shape({
//     sentiment: PropTypes.shape({
//       expanded: PropTypes.bool.isRequired,
//       height: PropTypes.number.isRequired,
//     }).isRequired,
//     celebration: PropTypes.shape({
//       expanded: PropTypes.bool.isRequired,
//       fullExpanded: PropTypes.bool.isRequired,
//       height: PropTypes.number.isRequired,
//     }).isRequired,
//     request: PropTypes.shape({
//       expanded: PropTypes.bool.isRequired,
//       height: PropTypes.number.isRequired,
//     }).isRequired,
//     announcement: PropTypes.shape({
//       expanded: PropTypes.bool.isRequired,
//       height: PropTypes.number.isRequired,
//     }).isRequired,
//   }).isRequired,
//   dispatchGridHeight: PropTypes.func.isRequired,
// }