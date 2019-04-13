import React from 'react';
import cx from 'classnames';
import MuiTabs from '@material-ui/core/Tabs';
//import { TABS } from '../../theme/core';

const Tabs = ({ className, inverted, ...props }) => (
  <MuiTabs
  
  {...props}
  />
);

export default Tabs;