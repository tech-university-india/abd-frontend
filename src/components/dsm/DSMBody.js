import { React, useContext } from 'react';
// import Proptypes from "prop-types";
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
//   gridHeightState: Proptypes.shape({
//     sentiment: Proptypes.shape({
//       expanded: Proptypes.bool.isRequired,
//       height: Proptypes.number.isRequired,
//     }).isRequired,
//     celebration: Proptypes.shape({
//       expanded: Proptypes.bool.isRequired,
//       fullExpanded: Proptypes.bool.isRequired,
//       height: Proptypes.number.isRequired,
//     }).isRequired,
//     request: Proptypes.shape({
//       expanded: Proptypes.bool.isRequired,
//       height: Proptypes.number.isRequired,
//     }).isRequired,
//     announcement: Proptypes.shape({
//       expanded: Proptypes.bool.isRequired,
//       height: Proptypes.number.isRequired,
//     }).isRequired,
//   }).isRequired,
//   dispatchGridHeight: Proptypes.func.isRequired,
// }