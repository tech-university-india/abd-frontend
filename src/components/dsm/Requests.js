import React, { useContext, useEffect, useState } from 'react';
import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography, IconButton, Dialog, Chip } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AddCircle as AddCircleIcon } from '@mui/icons-material';
import axios from 'axios';
import { Stack } from '@mui/system';
import { DSMBodyLayoutContext } from '../contexts/DSMBodyLayoutContext';
import GenericInputModal from '../elements/dsm/GenericInputModal';
import { ErrorContext } from '../contexts/ErrorContext';
import { DOMAIN } from '../../config';
import ChatContainer from '../elements/dsm/ChatContainer';
import { getCurretUser } from '../utilityFunctions/User';
import { DSM_REQUEST_DEFAULT_TYPE, DSM_REQUEST_INPUT_PLACEHOLDER } from '../constants/dsm/Requests';

export default function Requests() {

  const { setError, setSuccess } = useContext(ErrorContext);

  const { gridHeightState, dispatchGridHeight } = useContext(DSMBodyLayoutContext)
  const handleExpandRequests = () => {
    dispatchGridHeight({ type: "REQUEST" })
  };

  const [requests, setRequests] = useState([]);
  const [openModal, setOpenAddModal] = useState(false);
  const handleAddButtonClick = () => {
    setOpenAddModal(!openModal);
    dispatchGridHeight({ type: "REQUEST" });
  }

  const handleModalClose = () => {
    setOpenAddModal(false);
  }

  const getRequests = async () =>{
    try {
      const res = await axios.get(`${DOMAIN}/api/dsm/team-requests`);
      return res.data;
    }
    catch(err) {
      console.error(err);
      setError(val => val + err);
      return [];
    }
  }

  useEffect(() => {
    getRequests().then((_requests) => {
      setRequests(_requests);
    })
  }, [])

  const handleChatClick = (request) => {
    console.log(request);
    // open a modal with the request
  };

  const [requestType, setRequestType] = useState(DSM_REQUEST_DEFAULT_TYPE);

  const addRequestToDB = async (content) => {
    try {
      const res = await axios.post(`${DOMAIN}/api/dsm/team-requests`, {
        author: getCurretUser(),
        content,
        type: requestType,
      });
      setSuccess(() => "Request Created Successfully!");
      return res.data;
    }
    catch(err) {
      console.error(err);
      setError(val => val + err);
      return false;
    }
  }

  return (
    <Grid item height={gridHeightState.request.height} sx={{ ...(gridHeightState.request.expanded && { paddingBottom: "15px" }) }}>
      <Accordion expanded={gridHeightState.request.expanded} onChange={handleExpandRequests} sx={{
        height: gridHeightState.request.expanded ? "100%" : "none",
        overflow: "auto",
      }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
          sx={{
            '.MuiAccordionSummary-content': {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }
          }}
        >
          {/* All Content/Development of Requests HEADER goes here */}
          <Typography variant="dsmSubMain">Requests</Typography>
          <IconButton onClick={handleAddButtonClick}>
            <AddCircleIcon color="primary" />
          </IconButton>

        </AccordionSummary>

        <Dialog
          open={openModal}
          onClose={handleModalClose}
        >
          <GenericInputModal
            title='Request Statement'
            onCloseButtonClick={handleModalClose}
            primaryButtonText='Post'
            onPrimaryButtonClick={async (content) => {
              const isRequestSuccesfullyDone = await addRequestToDB(content);
              if (isRequestSuccesfullyDone) {
                getRequests().then((_requests) => {
                  setRequests(_requests);
                });
                handleModalClose();
              }
            }}
            placeholder={DSM_REQUEST_INPUT_PLACEHOLDER}
          >
            <Typography>
              Tags
            </Typography>
            <br />
            <Stack spacing={1} direction="row">
              <Chip label="Meeting" onClick={() => setRequestType('MEETING')}  color={requestType === "MEETING" ? 'primary' : 'default'} />
              <Chip label="Resource" onClick={() => setRequestType('RESOURCE')} color={requestType === "RESOURCE" ? 'primary' : 'default'} />
            </Stack>
          </GenericInputModal>
          </Dialog>

        <AccordionDetails sx={{
          display: "flex",
          flexDirection: "column",
          padding: "16px",
          gap: "16px",
        }}>
          {requests.map((announcement) => (
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