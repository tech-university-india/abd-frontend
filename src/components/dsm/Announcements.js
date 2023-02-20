import React, { useContext, useEffect, useState } from 'react';
import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography, IconButton, Dialog } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AddCircle as AddCircleIcon } from '@mui/icons-material';
import { DSMBodyLayoutContext } from "../contexts/DSMBodyLayoutContext"
import GenericInputModal from '../elements/dsm/GenericInputModal';
import ChatContainer from '../elements/dsm/ChatContainer';

export default function Announcements() {
  const { gridHeightState, dispatchGridHeight } = useContext(DSMBodyLayoutContext)
  const handleExpandAnnouncements = () => {
    dispatchGridHeight({ type: "ANNOUNCEMENT" })
  };

  const [announcements, setAnnouncements] = useState([]);
  const [openModal, setOpenAddModal] = useState(false);
  const handleAddButtonClick = () => {
    setOpenAddModal(!openModal);
    dispatchGridHeight({ type: "ANNOUNCEMENT" });
  }

  const handleModalClose = () => {
    setOpenAddModal(false);
  }

  // TODO: integrate with backend
  // OPTIMIZE: Is backend for announcements paginated ?
  const getAnnouncements = async () => [
      {
        "announcementId": 0,
        "author": "Ritik Rajdev",
        "content": "This is a test announcement",
        "createdAt": "2023-02-20T20:35:20.327Z"
      },
      {
        "announcementId": 1,
        "author": "Ritik Rajdev",
        "content": "This is a test announcement",
        "createdAt": "2023-02-20T20:35:20.327Z"
      }
    ]

  useEffect(() => {
    getAnnouncements().then((_announcements) => {
      setAnnouncements(_announcements);
    })
  }, [])

  const handleChatClick = (announcement) => {
    console.log(announcement);
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
        <AccordionDetails sx={{
          display: "flex",
          flexDirection: "column",
          padding: "16px",
          gap: "16px",
        }}>
          {announcements.map((announcement) => (
            <ChatContainer
              key={announcement.announcementId}
              name={announcement.author}
              content={announcement.content}
              date={new Date(announcement.createdAt)}
              onClick={() => handleChatClick(announcement)}
            />
          ))}

        </AccordionDetails>
      </Accordion>
    </ Grid >
  );
};
