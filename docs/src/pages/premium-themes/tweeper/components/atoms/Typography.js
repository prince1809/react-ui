import React from 'react';
import cx from 'classnames';
import MuiTypography from '@material-ui/core/Typography';
import { TEXT } from '../../theme/core';


const Typography = ({
  className,
  bold,
  inline,
  link,
  linkInverted,
  icon,
  inverted,
  indented,
  indentedLarge,
  light,
  lightWeight,
  primary,
  secondary,
  tertiary,
  success,
  danger,
  ...props
}) => (
  <MuiTypography
    className={cx(
    TEXT.root,
    className,
    )}
    {...props}
  />
);

export default Typography;