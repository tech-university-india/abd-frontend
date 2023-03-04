/* eslint-disable react/no-array-index-key */
import React, { useContext, useEffect, useState } from 'react';
import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography, IconButton, Dialog } from '@mui/material';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import Masonry from '@mui/lab/Masonry';
import axios from 'axios';
import { AddCircle as AddCircleIcon } from '@mui/icons-material';
import CelebrationCard from './CelebrationCard';
import { DSMBodyLayoutContext } from "../contexts/DSMBodyLayoutContext"
import { DOMAIN } from '../../config';
import { ErrorContext } from '../contexts/ErrorContext';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(0.5),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));
// const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80, 150, 30, 90, 70, 90, 100, 150, 30, 50, 80, 150, 30, 90, 70, 90, 100, 150, 30, 50, 80];


export default function CelebrationBoard() {
  const { setError } = useContext(ErrorContext);
  const [celebrations, setCelebrations] = useState([]);
  const { gridHeightState, dispatchGridHeight } = useContext(DSMBodyLayoutContext)
  const [openModal, setOpenAddModal] = useState(false);

  const handleExpandCelebration = () => {
    dispatchGridHeight({ type: "CELEBRATION" })
  };

  const handleAddButtonClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setOpenAddModal(true);
  }

  const handleModalClose = () => {
    setOpenAddModal(false);
  }

  const getCelebrations = async () => {
    try {
      const res = await axios.get(`${DOMAIN}/api/dsm/celebrations`);
      return res.data;
    }
    catch (err) {
      console.error(err);
      setError(val => val + err);
      return [];
    }
  }

  useEffect(() => {
    getCelebrations().then(celebrationsData =>
      setCelebrations(celebrationsData)
    )
  }, [])

  return (
    <Grid item
      height={gridHeightState.celebration.height}>
      <Accordion
        expanded={gridHeightState.celebration.expanded}
        onChange={handleExpandCelebration} sx={{
          overflow: "auto",
          height: gridHeightState.celebration.expanded ? "100%" : "auto"
        }}>
        <AccordionSummary
          expandIcon={(gridHeightState.celebration.fullExpanded) ?
            <IconButton>
              <FullscreenExitIcon />
            </IconButton> :
            <IconButton>
              <FullscreenIcon />
            </IconButton>}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{
            '.MuiAccordionSummary-content': {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }
          }}
        >
          {/* All Content/Development of Celebration Board HEADER goes here */}
          <Typography variant="dsmSubMain">Celebration Board</Typography>
          <IconButton onClick={(e) => handleAddButtonClick(e)}>
            <AddCircleIcon color="primary" />
          </IconButton>
        </AccordionSummary>
        <AccordionDetails>
          <Masonry className="celebration-masonry" sx={{ overflow: "hidden" }} columns={{ xs: 1, sm: 2, md: 3, lg: gridHeightState.celebration.fullExpanded ? 4 : 3 }} spacing={2}>
            {celebrations.map((celebration) => (
              <CelebrationCard celebration={celebration} />
            ))}
          </Masonry>
          {/* All Content/Development of Celebration Board BODY goes here */}
        </AccordionDetails>
      </Accordion>
      <Dialog
        open={openModal}
        onClose={handleModalClose}
      >
        Hello
      </Dialog>
    </Grid >
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