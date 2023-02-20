import React, { useContext, useState } from 'react';
import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography, IconButton, Dialog } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AddCircle as AddCircleIcon } from '@mui/icons-material';
import { DSMBodyLayoutContext } from "../contexts/DSMBodyLayoutContext"
import GenericInputModal from '../elements/dsm/GenericInputModal';

export default function Announcements() {
  const { gridHeightState, dispatchGridHeight } = useContext(DSMBodyLayoutContext)
  const handleExpandAnnouncements = () => {
    dispatchGridHeight({ type: "ANNOUNCEMENT" })
  };


  const [openModal, setOpenAddModal] = useState(false);
  const handleAddButtonClick = () => {
    setOpenAddModal(!openModal);
    dispatchGridHeight({ type: "ANNOUNCEMENT" });
  }

  const handleModalClose = () => {
    setOpenAddModal(false);
  }

  return (
    <Grid item height={gridHeightState.announcement.height} >
      <Accordion expanded={gridHeightState.announcement.expanded} onChange={handleExpandAnnouncements} sx={{
        height: gridHeightState.announcement.expanded ? "100%" : "none",
      }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
          sx={{
            '.MuiAccordionSummary-content': {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }
          }}
        >
          <Typography variant="dsmSubMain">Announcements</Typography>
          <IconButton onClick={handleAddButtonClick}>
            <AddCircleIcon color="primary" />
          </IconButton>
        </AccordionSummary>
        <Dialog
          open={openModal}
          onClose={handleModalClose}
        >
          <GenericInputModal
            title='Announcement Statement'
            onCloseButtonClick={handleModalClose}
            primaryButtonText='Post'
            primaryButtonOnClick={(content) => {
              // eslint-disable-next-line no-unused-vars
              const announcement = {content};
              // TODO: add Announcement to DB
            }}

            // TODO: add children component to check for addition on slack channel
          />
          
        </Dialog>
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
