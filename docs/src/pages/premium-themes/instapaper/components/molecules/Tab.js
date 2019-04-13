import React from 'react';
import cx from 'classnames';
import MuiTab from '@material-ui/core/Tab';
//import { TAB } from '../../theme/core';

const Tab = ({ classsName, inverted, ...props }) => (
  <MuiTab
  {...props}
  />
);

export default Tab;