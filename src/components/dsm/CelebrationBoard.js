import React, { useContext } from 'react';
import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
// import Proptypes from "prop-types";
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import { DSMBodyLayoutContext } from "../contexts/DSMBodyLayoutContext"

export default function CelebrationBoard() {
  const { gridHeightState, dispatchGridHeight } = useContext(DSMBodyLayoutContext)

  const handleExpandCelebration = () => {
    dispatchGridHeight({ type: "CELEBRATION" })
  };

  return (
    <Grid item height={gridHeightState.celebration.height}>
      <Accordion expanded={gridHeightState.celebration.expanded} onChange={handleExpandCelebration} sx={{
        height: gridHeightState.celebration.expanded ? "100%" : "none"
      }}>
        <AccordionSummary
          expandIcon={(gridHeightState.celebration.fullExpanded) ? <FullscreenExitIcon /> : <FullscreenIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="dsmSubMain">Celebration Board</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
};

// CelebrationBoard.propTypes = {
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