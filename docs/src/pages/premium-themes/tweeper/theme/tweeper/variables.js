import { createMuiTheme } from '@material-ui/core/styles';
import classes from '../core/classes';

const theme = createMuiTheme({
  typography: {
    fontSize: 15,
    fontWeightRegular: 500,
    useNextVariants: true,
  }
});

const white = {
  text: '#ffffff',
  primary: 'rgba(255, 255, 255, 0.7)',
  secondary: 'rgba(255, 255, 255, 0.54)',
  disabled: 'rgba(255, 255, 255, 0.38)',
  hint: 'rgba(255, 255, 255, 0.24)',
};

export default {
  ...classes,
  theme,
  white,
};