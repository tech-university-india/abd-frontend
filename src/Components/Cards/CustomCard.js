import React, { useState } from 'react'
import { PropTypes } from 'prop-types';
import { Box, Card, CardContent, Typography, Button, Checkbox,useTheme, styled ,Stack,Avatar,Tooltip} from '@mui/material';
import stc from 'string-to-color';

// import theme from './theme';
import Status from './Status';
import dateGetter from '../utilityFunctions/dateGetter';

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
  padding: 20,
}));

const CardHeader = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between'
}));


const STATUS = {
  completed: 'COMPLETE',
  pending: 'PENDING',
  none: 'NONE',
  draft: 'DRAFT',
};

export default function CustomCard({chckBox, data,type}) {
  console.log(data.createdAt)
  const theme = useTheme();
  console.log(theme);
  const [checked, setChecked] = useState(false);
  // const classes = useStyles();

  const renderdueDate = () => {
    if (type==='action_item') {
         return <Typography color="primary" fontWeight={500} mt={2} pl={1}> Needed By {dateGetter(data.dueDate,"dueDate")}</Typography>
    } 
    return <Typography color="primary" fontWeight={500} mt={2} sx={{visibility: 'hidden' }}> Needed By {dateGetter(data.dueDate,"dueDate")}</Typography>
  }

  const renderLink=()=>{
  if(type==='key_decision' || type==='agenda_item'){
    return <Button variant="contained" sx={{ display: 'inline-flex', marginLeft: 20,visibility:'hidden'}} >JIRA LINK</Button>
  }
 
    return <Button variant="contained" sx={{ display: 'inline-flex', marginLeft: 30}} >JIRA LINK</Button>
  }

  const renderCheckBox=()=>{
    if(chckBox===true)
      {
        if (data.status === STATUS.completed) 
        {
         return <Checkbox color='primary' size="large" checked={checked} onChange={() => setChecked(toggle)} />
         }
      return <Checkbox color='primary' size="large" disabled />
      }
    return <Checkbox color='primary' size="large" sx={{visibility:'hidden'}} />
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
              data.status === 'COMPLETED' ? ( <Status colour='#40A737' status='PUBLISHED' />): <Status colour='#FF6E00' status='DRAFT' />
            }
            <Typography color="secondary" variant="h8" mt={2}>{dateGetter(data.createdAt,"createdAt")} </Typography>
          </CardHeader>
          <Box>
            <Tooltip title={data.note}>
            <Typography mt={3} pl={1} sx={{overflow: "hidden",textOverflow: "ellipsis",
               display: "-webkit-box",
               WebkitLineClamp: 4,
               WebkitBoxOrient: "vertical",
            }}> {data.note}</Typography>
            </Tooltip>
          </Box>
          {renderdueDate()}
          <Stack direction="row" spacing={-1} mt={2} pl={1} sx={{ display: 'inline-flex' }}>
            {
              ['Kartik Goel', 'Samim Gupta', 'Abhishek Bharadwaj'].map((names) => <Avatar {...stringAvatar(names)} />)
            }
          </Stack>
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
    // collabrators: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
