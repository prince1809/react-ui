import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Hidden from '@material-ui/core/Hidden';
import ListItemText from '@material-ui/core/ListItemText';
import atoms from '../atoms';
import molecules from '../molecules';

const { AppBar, Badge, Icon, Toolbar } = atoms;
const { Tabs, Tab } = molecules;

const Header = () => (
  <AppBar position="sticky" elevation={1}>
  <Toolbar>
    <Grid container alignItems="center" spacing={16}>
    <Grid item xs={6} sm={4}>
    <Tabs value={0} variant="fullWidth">
      <Tab
      onlyIcon
      icon={
        <Badge dotted badgeContent="">
          <Icon>home</Icon>
        </Badge>
      }
      />
      <Tab onlyIcon icon={<Icon>search</Icon>} />
      <Tab 
      onlyIcon
      icon={
        <Badge number badgeContent={2}>
          <Icon>notification</Icon>
        </Badge>
      }
      />
      <Tab onlyIcon icon={<Icon>mail</Icon>} />
    </Tabs>
    </Grid>
    </Grid>
  </Toolbar>
  </AppBar>
);

export default Header;