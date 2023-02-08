import React, { useState } from 'react'
import { PropTypes } from 'prop-types';
import {
  Box, Card, CardContent,
  Typography, Button, Checkbox,
  useTheme, styled, Stack, Avatar
}
  from '@mui/material';
import Brightness1Icon from '@mui/icons-material/Brightness1';

const stringToColor = (string) => {
  let hash = 0;
  let i;
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';
  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

function toggle(value) {
  return !value;
}

const Cards = styled(Card)(() => ({
  width: 400,
  height: 300,
  borderRadius: 30,
}));

const CardHeader = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between'
}));

export default function CustomCard({ colour, chckBox, data }) {
  console.log(data.createdAt)
  const theme = useTheme();
  console.log(theme);
  const [checked, setChecked] = useState(false);
  return (
    <Box m={3}>
      <Cards>
        <CardContent>
          <CardHeader>
            {
              chckBox === true ?
                (<Checkbox color='primary' size="large" checked={checked} onChange={() => setChecked(toggle)} />)
                : (<Checkbox color='primary' size="large" sx={{ visibility: 'hidden' }} />)
            }
            <Brightness1Icon sx={{ color: colour, marginTop: 1.5, paddingLeft: 12 }} />
            <Typography color="primary" mt={1.5}>{data.createdAt} </Typography>
          </CardHeader>
          <Box>
            <Typography mt={3} sx={{
              overflow: "hidden", textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 4,
              WebkitBoxOrient: "vertical",
            }}> {data.note}</Typography>
          </Box>
          <Typography color="primary" fontWeight={500} mt={2}>{data.dueDate}</Typography>
          <Stack direction="row" spacing={-1} mt={1} sx={{ display: 'inline-flex' }}>
            {
              ['Kartik Goel', 'Samim Gupta', 'Abhishek Bharadwaj'].map((names) => <Avatar {...stringAvatar(names)} />)
            }
          </Stack>
          <Button variant="contained" sx={{ display: 'inline-flex', marginLeft: 20 }}>JIRA LINK</Button>
        </CardContent>
      </Cards>
    </Box>
  );
};

CustomCard.propTypes = {
  colour: PropTypes.string.isRequired,
  chckBox: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    note: PropTypes.string.isRequired,
    dueDate: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired
  }).isRequired,
};
