import React, { useContext } from 'react';
import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
// import Proptypes from "prop-types";
// import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { DSMBodyLayoutContext } from "../contexts/DSMBodyLayoutContext"
// import MuiAccordion from '@mui/material/Accordion';
// import MuiAccordionSummary from '@mui/material/AccordionSummary';
export default function Sentiment() {
  const { gridHeightState, dispatchGridHeight } = useContext(DSMBodyLayoutContext)

  // const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  //   padding: 0,
  //   borderTop: '1px solid rgba(0, 0, 0, .125)',
  // }));


  const handleExpandSentiment = () => {
    dispatchGridHeight({ type: "SENTIMENT" })
  };

  return (
    <Grid item sx={{ marginBottom: "10px", paddingBottom: "10px", ...(gridHeightState.sentiment.expanded && { paddingBottom: "15px" }), display: "flex", flexDirection: "row", justifyContent: "space-between" }} height={gridHeightState.sentiment.height}>
      <Grid item xs={gridHeightState.celebration.fullExpanded ? 8 : 12}>
        <Accordion expanded={gridHeightState.sentiment.expanded} onChange={handleExpandSentiment} sx={{
          height: gridHeightState.sentiment.expanded ? "100%" : "auto",
        }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              textAlign: "center",
            }}
          >
            <Typography variant="dsmMain" width="100%">How are you feeling today?</Typography>
          </AccordionSummary>
          <AccordionDetails height="100%">
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
      {
        gridHeightState.celebration.fullExpanded && (
          <Grid item xs={1.7}>
            <Accordion expanded={false} onChange={handleExpandSentiment} sx={{
              height: gridHeightState.sentiment.expanded ? "100%" : "none",
              padding: "6px",

            }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant='dsmSubMain'>Requests</Typography>
              </AccordionSummary>
            </Accordion>
          </Grid>
        )
      }
      {
        gridHeightState.celebration.fullExpanded && (
          <Grid item xs={2} height="auto">
            <Accordion expanded={false} onChange={handleExpandSentiment} sx={{
              height: gridHeightState.sentiment.expanded ? "100%" : "none",
              padding: "6px",
            }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant='dsmSubMain'>Announcements</Typography>
              </AccordionSummary>
            </Accordion>
          </Grid>
        )
      }
    </Grid >
  );
};

// Sentiment.propTypes = {
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