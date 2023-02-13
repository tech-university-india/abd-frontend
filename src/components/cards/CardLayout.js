import React from 'react';
import { Box } from '@mui/material';
import { PropTypes } from 'prop-types';
import CustomCard from './CustomCard';

export default function CardLayout(props) {
  const { chckBox, type, data } = props;
  return (
    <Box>
      {
        data.map((item) => (
          <CustomCard chckBox={chckBox} type={type} data={item} />
        ))
      }
    </Box>
  );
}
CardLayout.propTypes = {
  chckBox: PropTypes.bool,
  type: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    note: PropTypes.string.isRequired,
    issueLink: PropTypes.string,
    dueDate: PropTypes.string,
    createdAt: PropTypes.string.isRequired,
    status: PropTypes.string,
    // collabrators: PropTypes.arrayOf(PropTypes.string).isRequired,
  })).isRequired,
};
CardLayout.defaultProps = {
  chckBox: false,
};