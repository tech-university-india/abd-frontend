import React from 'react';
import { ThemeProvider } from '@mui/material';
import { useQuery } from 'react-query';
import { PropTypes } from 'prop-types';

import CustomCard from './customCard';
import theme from './theme';
import filterToDifferentTypes from '../utilityFunctions/filterData';
import { DOMAIN } from '../../config';

export default function CardLayout(props) {
  const { colour, chckBox, type } = props;
  const { data, error, isError, isLoading } = useQuery('data', async () => {
    const res = await fetch(`${DOMAIN}/api/po-notes`);
    return res.json();
  },
    {
      refetchInterval: 1000,
    });
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <div>Error! {error.message}</div>
  }
  const datas = filterToDifferentTypes(data);
  let dataType = [];
  if (type === 'action_item') {
    dataType = datas.ACTION_ITEM ?? [];
  }
  else if (type === 'key_decisions') {
    dataType = datas.KEY_DECISION ?? [];
  }
  else if (type === 'agenda_item') {
    dataType = datas.AGENDA_ITEM ?? [];
  }
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
  type: PropTypes.string.isRequired
};

CardLayout.defaultProps = {
  colour: 'white',
  chckBox: false,
};