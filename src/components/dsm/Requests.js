import React, { useContext } from 'react';
import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Proptypes from 'prop-types';
import { DSMBodyLayoutContext } from '../contexts/DSMBodyLayoutContext';

export default function Requests() {
  const { gridHeightState, dispatchGridHeight } = useContext(DSMBodyLayoutContext)

  const handleExpandRequests = () => {
    dispatchGridHeight({ type: "REQUEST" })
  };

  return (
    <Grid item height={gridHeightState.request.height} sx={{ ...(gridHeightState.request.expanded && { paddingBottom: "15px" }) }}>
      <Accordion expanded={gridHeightState.request.expanded} onChange={handleExpandRequests} sx={{
        height: gridHeightState.request.expanded ? "100%" : "none"
      }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography variant="dsmSubMain">Requests</Typography>
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

// Requests.propTypes = {
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