import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { AccessAlarm, PendingActions } from "@mui/icons-material";
import PropTypes from "prop-types";

import IconCheckbox from "../../../elements/poNotes/IconCheckbox";
import DateFilterBox from "../../../elements/poNotes/DateFilterBox";
import { capitalize } from "../../../utilityFunctions/String";
import dateGetter from "../../../utilityFunctions/DateGetter";

const mainBoxPadding = "16px";

export default function QuickFilterPopover({ onChange }) {
  const [filters, setFilters] = useState({});

  useEffect(() => {
    onChange(filters);
  }, [filters]);

  return (
    <Box
      sx={{
        borderRadius: "8px",
        width: "348px",
        p: mainBoxPadding,
        boxSizing: "border-box",
      }}
      color="quickFilterPopover"
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

        {["today", "yesterday", "week"].map((date) => (
          <IconCheckbox
            Icon={AccessAlarm}
            label={capitalize(date)}
            isChecked={filters.date === date}
            onChange={(isChecked) => {
              setFilters({
                ...filters,
                startDate: undefined,
                endDate: undefined,
                date: isChecked ? date : undefined,
              });
            }}
          />
        ))}

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

        {["PENDING", "COMPLETED", "DRAFT"].map((status) => (
          <IconCheckbox
            Icon={PendingActions}
            label={capitalize(status)}
            isChecked={filters.status === status}
            onChange={(isChecked) => {
              setFilters({
                ...filters,
                status: isChecked ? status : undefined,
              });
            }}
          />
        ))}

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

        <DateFilterBox
          label={filters.startDate ? dateGetter(filters.startDate) :  "From Date"}
          disabled={Boolean(filters.date)}
          onChange={(date) => {
            setFilters({ ...filters, startDate: date, date: undefined });
          }}
        />
        <DateFilterBox
          label={filters.endDate ? dateGetter(filters.endDate) : "End Date"}
          disabled={Boolean(filters.date)}
          onChange={(date) => {
            setFilters({ ...filters, endDate: date, date: undefined });
          }}
        />
      </Box>
    </Box>
  );
}

QuickFilterPopover.propTypes = {
  onChange: PropTypes.func.isRequired,
};
