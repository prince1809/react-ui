import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

import Input from '@material-ui/core/Input';

import SearchIcon from '@material-ui/icons/Search';
import { isWidthUp } from '@material-ui/core/withWidth';

const styles = theme => ({
  'gloabl': {

  },
  root: {
    fontFamily: theme.typography.fontFamily,
    position: 'relative',
    marginRight: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    }
  },
  search: {

  },
  inputRoot: {

  },
  inputInput: {

  },
});
class AppSearch extends React.Component {


  render() {
    const { classes, width } = this.props;

    return (
      <div className={classes.root} style={{ display: isWidthUp('sm', width) ? 'flex' : 'none' }}>
        <div>
          <SearchIcon />
        </div>
        <Input
        disableUnderline
        placeholder="Search..."
        id="docsearch-input"
        inputRef={ref => {
          this.inputRef = ref;
        }}
        classes={{
          root: classes.inputInput,
          input: classes.inputInput,
        }}/>
      </div>
    );
  }
}

AppSearch.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
};

export default withStyles(styles)(AppSearch);