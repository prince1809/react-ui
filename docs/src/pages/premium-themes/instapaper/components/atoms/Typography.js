import React from 'react';
import cx from 'classnames';
import MuiTypography from '@material-ui/core/Typography';
import { defaultProps } from 'recompose';
//import { TEXT } from '../../theme/core';

const Typography = ({
  className,
  bold,
  lightWeight,
  ...props,
}) => (
  <MuiTypography
  {...props}
  />
);

export default Typography