import React, { useEffect } from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { AccessAlarm, PendingActions } from "@mui/icons-material";
import PropTypes from "prop-types";

import IconCheckbox from "../../../elements/poNotes/IconCheckbox";
import DateFilterBox from "../../../elements/poNotes/DateFilterBox";

const mainBoxPadding = "16px";

export default function QuickFilterPopover({onChange}) {
  const [filters, setFilters] = React.useState({});

  useEffect(() => {
    onChange(filters);
  }, [filters])

  return (
    <Box
      sx={{
        borderRadius: "8px",
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
          isChecked={filters.date === "today"}
          onChange={(isChecked) => {
            setFilters({
              ...filters,
              date: isChecked ? "today" : undefined,
            });
          }}
        />
        <IconCheckbox
          Icon={AccessAlarm}
          label="Yesterday"
          isChecked={filters.date === "yesterday"}
          onChange={(isChecked) => {
            setFilters({
              ...filters,
              date: isChecked ? "yesterday" : undefined,
            });
          }}
        />
        <IconCheckbox
          Icon={AccessAlarm}
          label="This Week"
          isChecked={filters.date === "week"}
          onChange={(isChecked) => {
            setFilters({
              ...filters,
              date: isChecked ? "week" : undefined,
            });
          }}
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
          label="PENDING"
          isChecked={filters.status === "PENDING"}
          onChange={(isChecked) => {
            setFilters({
              ...filters,
              status: isChecked ? "PENDING" : undefined,
            });
          }}
        />

        <IconCheckbox
          Icon={PendingActions}
          label="COMPLETED"
          isChecked={filters.status === "COMPLETED"}
          onChange={(isChecked) => {
            setFilters({
              ...filters,
              status: isChecked ? "COMPLETED" : undefined,
            });
          }}
        />

        <IconCheckbox
          Icon={PendingActions}
          label="DRAFT"
          isChecked={filters.status === "DRAFT"}
          onChange={(isChecked) => {
            setFilters({
              ...filters,
              status: isChecked ? "DRAFT" : undefined,
            });
          }}
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

        <DateFilterBox
          label="From Date"
          disabled={Boolean(filters.date)}
          onChange={(date) => {
            setFilters({...filters, startDate: date});
          }}
        />
        <DateFilterBox
          label="End Date"
          disabled={Boolean(filters.date)}
          onChange={(date) => {
            setFilters({...filters, endDate: date});
          }}
        />
      </Box>
    </Box>
  );
}

QuickFilterPopover.propTypes = {
  onChange: PropTypes.func.isRequired,
}