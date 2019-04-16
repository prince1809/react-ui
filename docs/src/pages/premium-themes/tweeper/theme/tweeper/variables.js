import { createMuiTheme } from '@material-ui/core/styles';
//import classes from '../core/classes';

const theme = createMuiTheme({
  typography: {
    fontSize: 15,
    fontWeightRegular: 500,
    useNextVariants: true,
  }
});

export default {
  theme,
};