import React from 'react';
import { Box } from '@mui/material';
import { PropTypes } from 'prop-types';
import CustomCard from './CustomCard';

export default function CardLayout({ checkBox, type, data }) {
  console.log("data", data);
  return (
    <Box>
      {
        data.map((item) =>
          <CustomCard
            checkBox={checkBox}
            type={type}
            data={item} />)
      }
    </Box>
  );
}
CardLayout.propTypes = {
  checkBox: PropTypes.bool,
  type: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    note: PropTypes.string.isRequired,
    issueLink: PropTypes.string,
    dueDate: PropTypes.string,
    createdAt: PropTypes.string.isRequired,
    status: PropTypes.string,
    // collabrators: PropTypes.arrayOf(PropTypes.string).isRequired,
  })).isRequired
};
CardLayout.defaultProps = {
  checkBox: false,
};