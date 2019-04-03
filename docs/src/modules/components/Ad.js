import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Paper from '@material-ui/core/Paper';
//import CodeFund from 'docs/src/modules/components/CodeFund';
//import Carbon from 'docs/src/modules/components/Carbon';

const styles = theme => ({
  root: {

  },
  info: {

  },
  paper: {

  }
});

class Ad extends React.Component {
  random = Math.random();

  state = {
    disable: process.env.NODE_ENV !== 'production',
    adblock: null,
  };


  render() {
    const { classes } = this.props;
    const { adblock, disable } = this.state;

    return (
      <span>
        adblock
      </span>
    );
  }
}

Ad.PropTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Ad);