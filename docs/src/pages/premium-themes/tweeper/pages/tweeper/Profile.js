import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider/Divider';
import { unstable_Box as Box } from '@material-ui/core/Box';
import styled from '@material-ui/styles/styled';
//import Header from '../../components/tweeper/Header';
//import Tweet from '../../components/tweeper/Tweet';
//import TrackWho from '../../components/tweeper/TrackWho';
//import PopularNow from '../../components/tweeper/PopularNow';
//import AccordingWhom from '../../components/tweeper/AccordingWhom';
import theme from '../../theme/tweeper/theme';
import withTheme from './withTheme';
//import atoms from '../../components/atoms';
//import molecules from '../../components/molecules';

function Profile() {
  return (
    <React.Fragment>
      <CssBaseline />
      Header
      
    </React.Fragment>
  );
}

export default withTheme(theme)(Profile);