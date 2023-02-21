import React, { useContext } from 'react';
import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
          {/* All Content/Development of Requests HEADER goes here */}
          <Typography variant="dsmSubMain">Requests</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* All Content/Development of Requests BODY goes here */}
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