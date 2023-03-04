import { Close as CloseIcon } from "@mui/icons-material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Button, IconButton, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import PropTypes from "prop-types";

export default function GenericInputModal({
  onCloseButtonClick,

  title,

  defaultValue,

  children,

  primaryButtonText,
  onPrimaryButtonClick,

  secondaryButtonText,
  onSecondaryButtonClick,

  placeholder,
  isDisabled,
  setIsDisabled,
  deleteRequest
}) {
  const [content, setContent] = useState(defaultValue ?? "");

  return (
    <Box
      sx={{
        width: "max(25vw, 340px)",
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


      {
        (isDisabled!== undefined) 
          ?(
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <IconButton onClick={deleteRequest} sx={{padding: 0}}>
                <DeleteForeverIcon />
              </IconButton>
              <Box>
                <IconButton onClick={() => setIsDisabled(false)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => onCloseButtonClick(content)} sx={{padding: 0}}>
                  <CloseIcon />
                </IconButton>
              </Box>
            </Box>
          )
          :(
            <Box sx={{textAlign: 'right'}}>
              <IconButton onClick={() => onCloseButtonClick(content)} sx={{padding: 0}}>
                    <CloseIcon />
              </IconButton>
            </Box>
          )
      }

      

      {/* Title */}
      <Typography variant="h5">{title}</Typography>

      {/* TextField */}
      <TextField
        sx={{
          width: "100%",
          margin: "16px 0",
          boxShadow: "0px 5px 15px rgba(119, 132, 238, 0.3)",
        }}
        value={content}
        multiline
        rows={4}
        placeholder={placeholder}
        onChange={(e) => setContent(e.target.value)}
        disabled={isDisabled}
      />

      {children}

      {/* Primary Button */}
      {
        !isDisabled && (
          <Button
            sx={{
              margin: "16px 0",
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
            onClick={() => onPrimaryButtonClick(content)}
          >
            {primaryButtonText}
          </Button>
        )
      }

      {secondaryButtonText && (
        <Button
          sx={{
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
          onClick={() => onSecondaryButtonClick(content)}
        >
          {secondaryButtonText}
        </Button>
      )}
    </Box>
  );
}

GenericInputModal.propTypes = {
  onCloseButtonClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  primaryButtonText: PropTypes.string.isRequired,
  onPrimaryButtonClick: PropTypes.func,
  children: PropTypes.node,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  secondaryButtonText: PropTypes.string,
  onSecondaryButtonClick: PropTypes.func,
  isDisabled: PropTypes.bool,
  setIsDisabled: PropTypes.func,
  deleteRequest: PropTypes.func
};

GenericInputModal.defaultProps = {
  onPrimaryButtonClick: (content) => {
    console.log(content);
  },
  onSecondaryButtonClick: (content) => {
    console.log(content);
  },
  secondaryButtonText: undefined,
  children: undefined,
  placeholder: undefined,
  defaultValue: undefined,
  isDisabled: undefined,
  setIsDisabled: () => { },
  deleteRequest: ()=>{}
};
