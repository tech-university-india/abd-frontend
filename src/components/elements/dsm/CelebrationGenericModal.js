/* eslint-disable import/no-cycle */
import { Close as CloseIcon } from "@mui/icons-material";
import { Button, Checkbox, FormControlLabel, Grid, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import PropTypes from "prop-types";
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import CustomDropDown from "./CustomDropDown";
import CelebrationCard from '../../dsm/CelebrationCard';
import { celebrationTypes, celebrationPlaceholder, instructions } from '../../constants/DSM';
import InstructionBox from './InstructionBox';
import RichTextArea from '../RichTextArea';

export default function CelebrationGenericModal({
  onCloseButtonClick,
  title,
  inputTitle,
  children,
  primaryButtonText,
  onPrimaryButtonClick,
  secondaryButtonText,
  onSecondaryButtonClick,
  isPreview,
  setNewCelebration,
  newCelebration,
  update,
  lock,
  setLock,
}) {

  const reStructureCardDetails = () => ({
    content: newCelebration.content,
    type: newCelebration.type,
    createdAt: new Date(),
    isAnonymous: newCelebration.anonymous,
    author: "anonymous"
  })

  const setContent = (content) => {
    setNewCelebration({
      ...newCelebration,
      content
    });
  }

  const updateAnonymous = (isAnonymous) => {
    setNewCelebration({
      ...newCelebration,
      anonymous: isAnonymous
    });
  }

  const [openDropDown, setOpenDropDown] = useState(false);

  const updateCelebration = (celebration) => {
    setNewCelebration(celebration);
  }

  const onDeleteButtonClick = () => {
    console.log("delete");
  }

  const onEditButtonClick = () => {
    setLock(!lock);
  }

  // console.log(instructions, instructions[newCelebration.type], newCelebration.type, celebrationTypes);
  const handleChange = (value) => {
    updateCelebration({
      ...newCelebration,
      type: value
    });
    setOpenDropDown(false);
  };

  return (

    <Box
      width={isPreview ? "max(25vw, 340px)" : "max(20vw, 340px)"}
      sx={{
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 30px 60px rgba(32, 56, 85, 0.15)",
        borderRadius: "8px",
        padding: "16px 24px 24px 24px",
        position: "relative"
      }}
    >

      {/* Action Buttons */}
      {/* TODO: add editable buttons and actions as well */}
      <Box
        sx={update ? {
          display: "flex",
          justifyContent: "space-between"
        } :
          {
            textAlign: "right",
          }}
      >
        {update &&
          <IconButton onClick={() => onDeleteButtonClick()}>
            <DeleteForeverRoundedIcon />
          </IconButton>
        }
        <Box sx={{
          textAlign: "right",
        }}>
          {update && !isPreview &&
            <IconButton onClick={() => onEditButtonClick()}>
              <EditRoundedIcon color={lock ? 'secondary' : "primary"} />
            </IconButton>
          }
          <IconButton onClick={(e) => onCloseButtonClick(e)}>
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>

      {
        isPreview ?
          <Box>
            <CelebrationCard celebration={reStructureCardDetails(newCelebration)} isPreview={isPreview} />
            <InstructionBox header={instructions[newCelebration.type]?.header} points={instructions[newCelebration.type]?.points} />
          </Box> :
          <Box>

            {/* Title */}
            <Box sx={{ margin: "0 0 16px 0" }}>
              <Typography variant="contentMain" marginButtom="20px" sx={{ fontSize: "16px", color: "#121212" }}>{title}</Typography>
            </Box>
            <CustomDropDown isMenu={false} value={newCelebration.type} openDropDown={lock ? false : openDropDown} setOpenDropDown={lock ? () => { } : setOpenDropDown} />
            <Box
              disabled={lock}
              visibility={openDropDown ? "visible" : "hidden"}
              sx={{
                zIndex: 1,
                bgcolor: "white",
                position: "absolute",
                minWidth: "85%"
              }}>
              {celebrationTypes.map((type) => {
                if (type !== newCelebration.type)
                  return <CustomDropDown isMenu value={type} handleChange={handleChange} />
                return null;
              }

              )}
            </Box>

            {/* TextField */}
            <Box sx={{ margin: "16px 0 10px 0" }}>
              <Typography variant='contentMain' sx={{ "font-weight": 500, color: "#121212" }} fontSize="15px" >{inputTitle}</Typography>
            </Box>

            <RichTextArea
              sx={{
                width: "85%",
                margin: "5px 0",
                boxShadow: "0px 5px 15px rgba(119, 132, 238, 0.3)",
              }}
              value={newCelebration.content}
              placeholder={celebrationPlaceholder[newCelebration.type]}
              setContent={setContent}
              enableTag
              disabled={lock}
            />

            {children}
            <FormControlLabel disabled={lock} sx={{ margin: "10px 0", paddingLeft: "5px", fontFamily: "Poppins" }} control={
              <Checkbox sx={{
                color: "#08A0F7",
                '&.Mui-checked': {
                  color: "#08A0F7",
                }
              }} onChange={() => updateAnonymous(!newCelebration.anonymous)} defaultChecked={newCelebration.anonymous} />} label="Post Anonymously" />

          </Box>
      }

      {
        !lock &&
        <Grid container spacing={2}>
          <Grid item xs={6}>
            {/* Secondary Button */}
            {
              secondaryButtonText && (
                <Button
                  sx={{
                    margin: "16px 0 5px 0",
                    padding: "12px 0",
                    width: "100%",
                    borderRadius: "8px",
                    color: "secondaryButton.contrastText",
                    backgroundColor: "secondaryButton.main",
                    "&:hover": {
                      color: "secondaryButton.contrastText",
                      backgroundColor: "secondaryButton.main",
                    },
                  }}
                  onClick={() => onSecondaryButtonClick()}
                >
                  <Typography variant='contentMain' color="inherit">{secondaryButtonText}</Typography>
                </Button>
              )
            }
          </Grid>
          <Grid item xs={6}>
            {/* Primary Button */}
            <Button
              sx={{
                margin: "16px 0 5px 0",
                padding: "12px 0",
                width: "100%",
                borderRadius: "8px",
                color: "customButton1.contrastText",
                backgroundColor: "customButton1.main",
                "&:hover": {
                  color: "customButton1.contrastText",
                  backgroundColor: "customButton1.main",
                },
              }}
              onClick={() => onPrimaryButtonClick()}
            >
              <Typography variant='contentMain' color="inherit">{primaryButtonText}</Typography>
            </Button>
          </Grid>
        </Grid>
      }
    </Box >
    // </Box>
  );
}

CelebrationGenericModal.propTypes = {
  onCloseButtonClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  inputTitle: PropTypes.string.isRequired,
  primaryButtonText: PropTypes.string.isRequired,
  onPrimaryButtonClick: PropTypes.func,
  children: PropTypes.node,
  secondaryButtonText: PropTypes.string,
  onSecondaryButtonClick: PropTypes.func,
  isPreview: PropTypes.bool,
  setNewCelebration: PropTypes.func.isRequired,
  newCelebration: PropTypes.shape({
    type: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    anonymous: PropTypes.bool.isRequired,
  }).isRequired,
  update: PropTypes.bool,
  lock: PropTypes.bool,
  setLock: PropTypes.func
};

CelebrationGenericModal.defaultProps = {
  onPrimaryButtonClick: () => {
  },
  onSecondaryButtonClick: () => {
  },
  secondaryButtonText: undefined,
  children: undefined,
  isPreview: false,
  update: false,
  lock: false,
  setLock: () => { }
};