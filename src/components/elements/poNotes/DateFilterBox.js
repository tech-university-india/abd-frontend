import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { DateRange } from "@mui/icons-material";
import ReactDatePicker from "react-datepicker";
import PropTypes from "prop-types";
import { getOnlyDateString } from "../../utilityFunctions/date";

// eslint-disable-next-line react/prop-types
export default function DateFilterBox({ label, onChange }) {
  const [date, setDate] = React.useState(undefined);

  return (
    <ReactDatePicker
      onChange={(_date) => {
        setDate(_date);
        onChange(_date);
      }}
      customInput={
        <Box
          sx={{
            padding: "8px 0",
            paddingLeft: "42px",
            borderBottom: "1px solid #DBE3F1",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography>{date ? getOnlyDateString(date) : label}</Typography>

          <IconButton
            sx={{
              marginRight: "8px",
            }}
            onClick={() => {}}
          >
            <DateRange
              sx={{
                color: "#08A0F7",
              }}
            />
          </IconButton>
        </Box>
      }
    />
  );
}

DateFilterBox.prop = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
