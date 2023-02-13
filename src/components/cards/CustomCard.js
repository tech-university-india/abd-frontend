import React, { useState } from 'react'
import { PropTypes } from 'prop-types';
import { Box, Card, CardContent, Typography, Button, Checkbox, styled, Stack, Avatar, Tooltip } from '@mui/material';
import stc from 'string-to-color';
import axios from 'axios';
import Status from './Status';
import dateGetter from '../utilityFunctions/DateGetter';
import { STATUS, TYPE } from '../utilityFunctions/Enums';
import { statusCompleted, statusDraft } from '../utilityFunctions/Color';
import collabrators from '../utilityFunctions/CollaboratorsData';
import { DOMAIN } from '../../config';

const stringToColor = (string) => (stc(string))
function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
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

export default function CustomCard({ checkBox, data, type }) {
  const [checked, setChecked] = useState(data.status === STATUS.completed);

  const isActionItem = () => {
    if (type === TYPE.action_item) {
      return true;
    }
    return false;
  }

  const handleToggle = async (status) => {
    try {
      const body = { 'status': !status ? STATUS.completed : STATUS.pending }
      await axios.patch(`${DOMAIN}/api/po-notes/${data.noteId}`, body)
      setChecked(!status)
    }
    catch (er) {
      // need to show the error message to the user
      console.log(er.message)
    }

  }

  const isPublished = () => {
    if (
      data.status === STATUS.completed ||
      data.status === STATUS.pending ||
      data.status === STATUS.none
    ) {
      return true;
    }
    return false;
  }

  const renderdueDate = () => {
    if (isActionItem()) {
      return <Typography color="primary" fontWeight={500} mt={2} pl={1} >
        <Typography variant="overline" display="inline-flex" gutterBottom pr={1}>
          Needed By
        </Typography>
        {dateGetter(data.dueDate, "dueDate")}
      </Typography >
    }
    return <Typography color="primary" fontWeight={500} sx={{ visibility: 'hidden' }}> Needed By {dateGetter(data.dueDate, "dueDate")} </Typography>
  }

  const renderLink = () => {
    if (isActionItem()) {
      return <Button variant="contained" sx={{ display: 'inline-flex', marginLeft: 30 }} >JIRA LINK</Button>
    }
    return <Button variant="contained" sx={{ display: 'inline-flex', marginLeft: 20, visibility: 'hidden' }} >JIRA LINK</Button>
  }
  const renderCheckBox = () => {
    if (checkBox === true) {
      if (isPublished()) {
        return <Checkbox color='primary' size="large" checked={checked} onChange={() => handleToggle(checked)} />
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
              isPublished() ? (<Status colour={statusCompleted} status={STATUS.published} />) : <Status colour={statusDraft} status={STATUS.draft} />
            }
            <Typography variant="caption" display="block" gutterBottom>
              {dateGetter(data.createdAt, "createdAt")}
            </Typography>
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
                collabrators.map((names) => <Avatar {...stringAvatar(names)} />)
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
  checkBox: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  data: PropTypes.shape({
    noteId: PropTypes.number.isRequired,
    note: PropTypes.string.isRequired,
    issueLink: PropTypes.string,
    dueDate: PropTypes.string,
    createdAt: PropTypes.string.isRequired,
    status: PropTypes.string,
    // collabrators: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};