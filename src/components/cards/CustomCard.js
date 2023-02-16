import React, { useState } from 'react'
import { PropTypes } from 'prop-types';
import {
  Box, Card, CardContent, Typography, Button,
  Checkbox, styled, Stack, Avatar, Tooltip
}
  from '@mui/material';
import stc from 'string-to-color';
import Status from './Status';
import dateGetter from '../utilityFunctions/DateGetter';
import { STATUS, TYPE } from '../utilityFunctions/Enums';
import { statusCompleted, statusDraft } from '../utilityFunctions/Color';
import { collaborators } from '../constants/PONotes';

const stringToColor = (string) => (stc(string))
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
  width: 'auto',
  height: 'auto',
  borderRadius: 30,
}));
const CardHeader = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between'
}));
export default function CustomCard({ chckBox, data, type }) {
  const [checked, setChecked] = useState(false);
  const renderdueDate = () => {
    if (TYPE.action_item === type) {
      return <Typography color="primary" fontWeight={500} mt={2} pl={1}>
        Needed By {dateGetter(data.dueDate, "dueDate")}
      </Typography>
    }
    return (
      <Typography color="primary" fontWeight={500} sx={{ visibility: 'hidden' }}>
        Needed By {dateGetter(data.dueDate, "dueDate")}
      </Typography>
    )
  }
  const renderLink = () => {
    if (type === TYPE.key_decision || type === TYPE.agenda_item) {
      return (
        <Button variant="contained" sx={{ display: 'inline-flex', marginLeft: 20, visibility: 'hidden' }} >
          JIRA LINK
        </Button>
      )
    }

    return <Button variant="contained" sx={{ display: 'inline-flex', marginLeft: 30 }} >JIRA LINK</Button>
  }
  const renderCheckBox = () => {
    if (chckBox === true) {
      if (data.status === STATUS.completed) {
        return <Checkbox color='primary' size="large" checked={checked} onChange={() => setChecked(toggle)} />
      }
      return <Checkbox color='primary' size="large" disabled />
    }
    return <Checkbox color='primary' size="large" sx={{ visibility: 'hidden' }} />
  };
  return (
    <Box m={3}>
      <Cards>
        <CardContent >
          <CardHeader>
            {
              renderCheckBox()
            }
            {
              data.status === STATUS.completed ?
                (<Status colour={statusCompleted} status={STATUS.published} />)
                : <Status colour={statusDraft} status={STATUS.draft} />
            }
            <Typography color="secondary" variant="h8" mt={2}>{dateGetter(data.createdAt, "createdAt")} </Typography>
          </CardHeader>
          <Box>
            <Tooltip title={data.note}>
              <Typography mt={3} pl={1} sx={{
                overflow: "hidden", textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 4,
                WebkitBoxOrient: "vertical",
              }}> {data.note}</Typography>
            </Tooltip>
          </Box>
          <Box sx={{ position: 'relative', bottom: 0, top: 35, display: 'inline-block' }}>
            {renderdueDate()}
            <Stack direction="row" spacing={-1} mt={2} pl={1} sx={{ display: 'inline-flex' }}>
              {
                collaborators.map((names) => <Avatar {...stringAvatar(names)} />)
              }
            </Stack>
          </Box>
          {renderLink()}
        </CardContent>
      </Cards>
    </Box>
  );
};
CustomCard.propTypes = {
  chckBox: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  data: PropTypes.shape({
    note: PropTypes.string.isRequired,
    issueLink: PropTypes.string,
    dueDate: PropTypes.string,
    createdAt: PropTypes.string.isRequired,
    status: PropTypes.string,
  }).isRequired,
};