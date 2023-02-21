import { React, useContext } from 'react';
import {
  Grid
} from '@mui/material';
import CelebrationBoard from './CelebrationBoard';
import Sentiment from './Sentiment';
import Announcements from './Announcements';
import Requests from './Requests';
import { DSMBodyLayoutContext } from '../contexts/DSMBodyLayoutContext';

export default function DSMBody() {
  const { gridHeightState } = useContext(DSMBodyLayoutContext)
  return (
    <Grid container spacing={2} sx={{ padding: '50px 50px 50px 50px' }} height="100%" backgroundColor='backgroundColor.main'>
      <Grid item xs={gridHeightState.celebration.fullExpanded ? 12 : 8} height="inherit">
        <Sentiment />
        <CelebrationBoard />
      </Grid>
      {!gridHeightState.celebration.fullExpanded && (
        <Grid item xs={4} height="inherit">
          <Requests />
          <Announcements />
        </Grid>
      )}
    </Grid >
  );
}

// DSMBody.propTypes = {
//   gridHeightState: PropTypes.shape({
//     sentiment: PropTypes.shape({
//       expanded: PropTypes.bool.isRequired,
//       height: PropTypes.number.isRequired,
//     }).isRequired,
//     celebration: PropTypes.shape({
//       expanded: PropTypes.bool.isRequired,
//       fullExpanded: PropTypes.bool.isRequired,
//       height: PropTypes.number.isRequired,
//     }).isRequired,
//     request: PropTypes.shape({
//       expanded: PropTypes.bool.isRequired,
//       height: PropTypes.number.isRequired,
//     }).isRequired,
//     announcement: PropTypes.shape({
//       expanded: PropTypes.bool.isRequired,
//       height: PropTypes.number.isRequired,
//     }).isRequired,
//   }).isRequired,
//   dispatchGridHeight: PropTypes.func.isRequired,
// }