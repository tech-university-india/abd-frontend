import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { AccessAlarm, PendingActions } from "@mui/icons-material";
import IconCheckbox from "../elements/poNotes/IconCheckbox";

import "react-datepicker/dist/react-datepicker.css";
import DateFilterBox from "../elements/poNotes/DateFilterBox";

const mainBoxPadding = "16px";

export default function QuickFilterPopover() {
  return (
    <Box
      sx={{
        borderRadius: "8px",
        outline: "1px solid black",
        width: "348px",
        p: mainBoxPadding,
        boxSizing: "border-box",
      }}
    >
      {/* Date Filters */}
      <Box>
        <Typography
          sx={{
            marginBottom: "8px",
            fontWeight: "500",
          }}
        >
          Date Filters
        </Typography>

        <IconCheckbox
          Icon={AccessAlarm}
          label="Today"
          onChange={(isChecked) => isChecked}
        />
        <IconCheckbox
          Icon={AccessAlarm}
          label="Yesterday"
          onChange={(isChecked) => isChecked}
        />
        <IconCheckbox
          Icon={AccessAlarm}
          label="This Week"
          onChange={(isChecked) => isChecked}
        />

        {/* Status Filters */}
        <Typography
          sx={{
            marginTop: "30px",
            marginBottom: "15px",
            fontWeight: "500",
          }}
        >
          Status Filters
        </Typography>

        <IconCheckbox
          Icon={PendingActions}
          label="Pending"
          onChange={(isChecked) => isChecked}
        />

        <IconCheckbox
          Icon={PendingActions}
          label="Completed"
          onChange={(isChecked) => isChecked}
        />

        <IconCheckbox
          Icon={PendingActions}
          label="Draft"
          onChange={(isChecked) => isChecked}
        />

        {/* Custom Filters */}
        <Typography
          sx={{
            marginTop: "30px",
            marginBottom: "15px",
            fontWeight: "500",
          }}
        >
          Custom Filters
        </Typography>

        <DateFilterBox label="From Date" onChange={() => {}}/>
        <DateFilterBox label="End Date" onChange={() => {}}/>
      </Box>
    </Box>
  );
}
