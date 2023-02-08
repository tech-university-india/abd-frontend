import React,{useState} from 'react'
import { PropTypes } from 'prop-types';
import { Box, Card, CardContent, Typography, Button, Checkbox,useTheme, styled ,Stack,Avatar} from '@mui/material';
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

function toggle(value){
  return !value;
}

  const Cards = styled(Card)(( ) => ({
    width: 400,
    height: 300,
    borderRadius: 30,
  }));

  const CardHeader = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'space-between'
  }));


function CustomCard({chckBox, data,type}) {
  console.log(data.createdAt)
  const theme=useTheme();
  console.log(theme);
  const [checked, setChecked] = useState(false);
  // const classes = useStyles();

  const renderdueDate = () => {
    if (type==='action_item') {
         return <Typography color="primary" fontWeight={500} mt={2}> Needed By {dateGetter(data.dueDate)}</Typography>
    } 
    return <Typography color="primary" fontWeight={500} mt={2} sx={{visibility: 'hidden' }}> Needed By {dateGetter(data.dueDate)}</Typography>
  }


  return (
    <Box m={3}>
      <Cards>
        <CardContent>
          <CardHeader>
            {
              chckBox === true ? (<Checkbox color='primary' size="large" checked={checked} onChange={() => setChecked(toggle)} />) : (<Checkbox color='primary' size="large" sx={{ visibility: 'hidden' }} />)
            }
            {
              data.status === 'COMPLETED' ? ( <Status colour='#40A737' status='PUBLISHED' />): <Status colour='#FF6E00' status='DRAFT' />
            }
            <Typography color="secondary" variant="h8" mt={1.5}>{dateGetter(data.createdAt)} </Typography>
          </CardHeader>
          <Box>
            <Typography mt={3} sx={{overflow: "hidden",textOverflow: "ellipsis",
               display: "-webkit-box",
               WebkitLineClamp: 4,
               WebkitBoxOrient: "vertical",
            }}> {data.note}</Typography>
          </Box>
          {renderdueDate()}
          <Stack direction="row" spacing={-1} mt={1} sx={{ display: 'inline-flex' }}>
            {
              ['Kartik Goel','Samim Gupta','Abhishek Bharadwaj'].map((names) => <Avatar {...stringAvatar(names)} />)
            }
          </Stack>
          <Button variant="contained" sx={{ display: 'inline-flex', marginLeft: 20 }}>JIRA LINK</Button>
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

export default CustomCard;
