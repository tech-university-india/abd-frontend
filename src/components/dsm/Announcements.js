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
//   gridHeightState: Proptypes.shape({
//     sentiment: Proptypes.shape({
//       expanded: Proptypes.bool.isRequired,
//       height: Proptypes.number.isRequired,
//     }).isRequired,
//     celebration: Proptypes.shape({
//       expanded: Proptypes.bool.isRequired,
//       fullExpanded: Proptypes.bool.isRequired,
//       height: Proptypes.number.isRequired,
//     }).isRequired,
//     request: Proptypes.shape({
//       expanded: Proptypes.bool.isRequired,
//       height: Proptypes.number.isRequired,
//     }).isRequired,
//     announcement: Proptypes.shape({
//       expanded: Proptypes.bool.isRequired,
//       height: Proptypes.number.isRequired,
//     }).isRequired,
//   }).isRequired,
//   dispatchGridHeight: Proptypes.func.isRequired,
// }