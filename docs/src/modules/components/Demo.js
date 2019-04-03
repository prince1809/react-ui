import React from 'react';
import LZString from 'lz-string';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import copy from 'clipboard-copy';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import EditIcon from '@material-ui/icons/Edit';
import CodeIcon from '@material-ui/icons/Code';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Tooltip from '@material-ui/core/Tooltip';
import Github from '@material-ui/docs/svgIcons/GitHub';
import MarkdownElement from '@material-ui/docs/MarkdownElement';
//import DemoFrame from 'docs/src/modules/components/DemoFrame';
//import DemoLanguages from 'docs/src/modules/components/DemoLanguages';
//import getDemoConfig from 'docs/src/modules/utils/getDemoConfig';
import { ACTION_TYPES, CODE_VARIANTS } from 'docs/src/modules/constants';



const styles = theme => ({
  root: {
    position: 'relative',
  },
});

class Demo extends React.Component {
  state = {
    anchorEl: null,
    codeOpen: false,
  };

  render() {
    
    const { classes, codeVariant, demo, demoOptions } = this.props;

    return(
      <div>

      </div>
    )
  }
}

export default compose(
  connect(state => ({
    codeVariant: state.options.codeVariant,
  })),
  withStyles(styles),
)(Demo);