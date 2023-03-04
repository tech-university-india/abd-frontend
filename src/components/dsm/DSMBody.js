import { React, useContext } from 'react';
import {
  Grid, Box
} from '@mui/material';
import CelebrationBoard from './CelebrationBoard';
import Sentiment from './Sentiment';
import Announcements from './Announcements';
import Requests from './Requests';
import { DSMBodyLayoutContext } from '../contexts/DSMBodyLayoutContext';

export default function DSMBody() {
  const { gridHeightState } = useContext(DSMBodyLayoutContext)
  return (
    <Grid >
      <Grid backgroundColor='backgroundColor.main' height='100%'>
        <Box sx={{
          display: 'flex', flexWrap: 'wrap', padding: '50px 50px 50px 50px'
        }}>
          <Grid container spacing={2} sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <Grid item xs={gridHeightState.celebration.fullExpanded ? 12 : 8} height="100vh">
              <Sentiment />
              <CelebrationBoard />
            </Grid>
            {!gridHeightState.celebration.fullExpanded && (
              <Grid item xs={4} height="100vh">
                <Requests />
                <Announcements />
              </Grid>
            )}
          </Grid >
        </Box>
      </Grid>
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