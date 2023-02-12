import React from 'react';
import { ThemeProvider } from '@mui/material';
import { PropTypes } from 'prop-types';
import CustomCard from './CustomCard';
import theme from '../Theme/GlobalTheme';

export default function CardLayout(props) {
  const { colour, chckBox, type, data } = props;
  const dataType = data;

  return (
    <ThemeProvider theme={theme}>
      {
        dataType.map((item) => (
          <CustomCard colour={colour} chckBox={chckBox} type={type} data={item} />
        ))
      }
    </ThemeProvider>
  );
}

CardLayout.propTypes = {
  colour: PropTypes.string,
  chckBox: PropTypes.bool,
  type: PropTypes.string.isRequired,
  data: PropTypes.shape({
    createdAt: PropTypes.string,
    dueDate: PropTypes.string,
    issueLink: PropTypes.string,
    note: PropTypes.string,
    noteId: PropTypes.number,
    type: PropTypes.string,
  }).isRequired,
};

CardLayout.defaultProps = {
  colour: 'white',
  chckBox: false,
};