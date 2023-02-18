import { Checkbox, InputLabel } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PropTypes from "prop-types";
import style from "react-style-proptype";

export default function IconCheckbox({ Icon, label, onChange, sx = {} }) {
  const idName = `${label.toLowerCase().replace(" ", "-")}-checkbox`;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "8px 0",
        justifyContent: "space-between",
        borderBottom: "1px solid #DBE3F1",
        fontWeight: 400,
        ...sx,
      }}
    >
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Icon
          fontSize="medium"
          sx={{
            marginRight: "18px",
          }}
        />
        <InputLabel
          htmlFor={idName}
          sx={{
            color: "black",
          }}
        >
          {label}
        </InputLabel>
      </Box>

      <Checkbox
        id={idName}
        sx={{
          color: "#08A0F7",
          "&.Mui-checked": {
            color: "#08A0F7",
          },
          "& .MuiSvgIcon-root": {
            background: "rgba(8, 160, 247, 0.06)",
            padding: "0",
            fontSize: 26,
          },
        }}
        onChange={(e) => onChange(e.target.checked)}
      />
    </Box>
  );
}

IconCheckbox.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  sx: style,
};

IconCheckbox.defaultProps = {
  sx: {},
};
