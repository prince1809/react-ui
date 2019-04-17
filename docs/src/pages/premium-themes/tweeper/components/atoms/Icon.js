import React from 'react';
import cx from 'classnames';
import MuiIcon from '@material-ui/core/Icon';
import { ICON } from '../../theme/core';

const Icon = ({
  className,
  left,
  right,
  ...props,
}) => (
  <MuiIcon
  className={cx(
    ICON.root,
    className,
    left && ICON.left
  )}
  {...props}
  />
);

export default Icon;
