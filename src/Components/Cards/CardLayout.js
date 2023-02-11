import React from 'react';
import { ThemeProvider } from '@mui/material';
import { useQuery } from 'react-query';
import { PropTypes } from 'prop-types';

import CustomCard from './CustomCard';
import theme from '../Theme/GlobalTheme';
import filterToDifferentTypes from '../utilityFunctions/filterData';
import { DOMAIN,REFETCH_INTERVAL} from '../../config';
import { TYPE } from '../utilityFunctions/enums';


export default function CardLayout(props) {
  const { chckBox, type } = props;
  const { data, error, isError, isLoading } = useQuery('data', async () => {
    const res = await fetch(`${DOMAIN}/api/po-notes`);
    return res.json();
  },
    {
      refetchInterval: REFETCH_INTERVAL,
    });
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <div>Error! {error.message}</div>
  }
  const datas = filterToDifferentTypes(data);
  let dataType = [];
  if (type === TYPE.action_item) {
    dataType = datas.ACTION_ITEM ?? [];
  }
  else if (type === TYPE.key_decision) {
    dataType = datas.KEY_DECISION ?? [];
  }
  else if (type === TYPE.agenda_item) {
    dataType = datas.AGENDA_ITEM ?? [];
  }
  return (
    <ThemeProvider theme={theme}>
      {
        dataType.map((item) => (
          <CustomCard chckBox={chckBox} type={type} data={item} />
        ))
      }
    </ThemeProvider>
  );
}

CardLayout.propTypes = {
  chckBox: PropTypes.bool,
  type: PropTypes.string.isRequired
};

CardLayout.defaultProps = {
  chckBox: false,
};