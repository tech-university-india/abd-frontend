import React from 'react';
import { useQuery } from 'react-query';
import { PropTypes } from 'prop-types';
import CustomCard from './CustomCard';


// const fetchData = 

function CardLayout(props) {
  const { colour, chckBox,urlLink} = props;
  const {data, error, isError, isLoading }=useQuery('data',async () => {
    const res = await fetch(urlLink);
    return res.json();
  },
    {
      refetchInterval: 120000
    });
  if (isLoading) {
    return <div>Loading...</div>
}
if (isError) {
    return <div>Error! {error.message}</div>
}
  return (
    <>
      {
        data.data.map((item) => (
          <CustomCard colour={colour} chckBox={chckBox} data={item} />
        ))
      }
    </>
  );
}

CardLayout.propTypes = {
  colour: PropTypes.string,
  chckBox: PropTypes.bool,
  urlLink: PropTypes.string.isRequired
  // ,
  // datas: PropTypes.arrayOf(PropTypes.shape({
  //   Description: PropTypes.string,
  //   collabrators: PropTypes.arrayOf(PropTypes.string)
  // }))
};

CardLayout.defaultProps = {
  colour: 'white',
  chckBox: false,
  // datas: []
};

export default CardLayout;
