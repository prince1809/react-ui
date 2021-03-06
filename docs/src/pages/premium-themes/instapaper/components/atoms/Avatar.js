import React from 'react';
import cx from 'classnames';
import MuiAvatar from '@material-ui/core/Avatar';
//import { AVATAR } from '../../theme/core';

const Avatar = ({ className, small, medium, ultraLarge, ...props }) => (
  <MuiAvatar
  {...props}
  />
);

export default Avatar;
