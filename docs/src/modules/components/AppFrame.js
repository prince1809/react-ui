import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

import { withStyles } from '@material-ui/core/styles';
import NProgressBar from '@material-ui/docs/NProgressBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import GithubIcon from '@material-ui/docs/svgIcons/GitHub';
import MenuIcon from '@material-ui/icons/Menu';
import LanguageIcon from '@material-ui/icons/Language';
import ColorsIcon from '@material-ui/icons/InvertColors';
import LightbulbOutlineIcon from '@material-ui/docs/svgIcons/LightbulbOutline';
import LightbulbFullIcon from '@material-ui/docs/svgIcons/LightbulbFull';
import FormatTextdirectionLToR from '@material-ui/icons/FormatTextdirectionLToR';
import FormatTextdirectionRToL from '@material-ui/icons/FormatTextdirectionRToL';

import PageTitle from 'docs/src/modules/components/PageTitle';
import AppDrawer from 'docs/src/modules/components/AppDrawer';
import AppSearch from 'docs/src/modules/components/AppSearch';
import Link from 'docs/src/modules/components/Link';
import { ACTION_TYPES } from 'docs/src/modules/constants';




const languages = [
  {
    code: 'en',
    text: '🇺🇸 English',
  },
  {
    code: 'ja',
    text: '🇯🇵 日本語',
  },

];


const styles = theme => ({
  root: {
    display: 'flex',
  },
  grow: {
    flex: '1 1 auto',
  },
  title: {
    marginLeft: 24,
    flex: '0 1 auto',
  },
  appBar: {
    transition: theme.transitions.create('width'),
    '@media print': {
      position: 'absolute',
    },
  },
  appBarHome: {
    boxShadow: 'none',
  },
  appBarShift: {
    [theme.breakpoints.up('lg')]: {
      width: 'calc(100% -240px)',
    },
  },
  drawer: {
    [theme.breakpoints.up('lg')]: {
      width: 240,
    }
  },
  navIconHide: {
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
});

class AppFrame extends React.Component {
  state = {
    languageMenu: null,
    mobileOpen: false,
  };

  handleDrawerOpen = () => {
    this.setState({ mobileOpen: true });
  };

  handleDrawerClose = () => {
    this.setState({ mobileOpen: false });
  };

  handleLanguageIconClick = event => {
    this.setState({ languageMenu: event.currentTarget });
  };

  handleLanguageMenuClose = () => {
    this.setState({ languageMenu: null });
  };

  handleLanguageMenuItemClick = lang => () => {
    if (lang !== this.props.userLanguage) {
      document.cookie = `lang=${lang};path/;max-age=3153600`;
      window.location.reload();
    }
    this.handleLanguageMenuClose();
  };

  handleTogglePaletteType = () => {
    const paletteType = this.props.reduxTheme.paletteType === 'light' ? 'dark' : 'light';
    document.cookie = `paletteType=${paletteType};path=/max-age=31536000`;

    this.props.dispatch({
      type: ACTION_TYPES.THEME_CHANGE,
      payload: {
        paletteType,
      }
    });
  };

  handleToggleDirection = () => {
    this.props.dispatch({
      type: ACTION_TYPES.THEME_CHANGE,
      payload: {
        direction: this.props.reduxTheme.direction === 'ltr' ? 'rtl' : 'ltr',
      }
    });
  };

  render() {

    const { children, classes, reduxTheme, userLanguage } = this.props;
    const { languageMenu } = this.state;
    return (
      <PageTitle>
        {title => {
          let disablePermanent = false;
          let navIconClassName = '';
          let appBarClassName = classes.appBar;

          if (title === null) {
            // home route, don't shift app bar or dock drawer
            disablePermanent = true;
            appBarClassName += ` ${classes.appBarHome}`;
          } else {
            navIconClassName = classes.navIconHide;
            appBarClassName += ` ${classes.appBarShift}`;
          }
          return (
            <div className={classes.root}>
              <CssBaseline />
              <AppBar className={appBarClassName}>
                <Toolbar>
                  <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={this.handleDrawerOpen}
                  className={navIconClassName}
                  >
                    <MenuIcon />
                  </IconButton>
                  {title !== null && (
                    <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                      {title}
                    </Typography>
                  )}
                  <div className={classes.grow} />
                  {/* <AppSearch /> */}
                  <Tooltip title="Change Laguage" enterDelay={300}>
                    <IconButton
                    color="inherit"
                    aria-owns={languageMenu ? 'language-menu': undefined}
                    aria-haspopup="true"
                    onClick={this.handleLanguageIconClick}
                    >
                      <LanguageIcon />
                    </IconButton>
                  </Tooltip>
                  <Menu
                  id="language-menu"
                  anchorEl={languageMenu}
                  open={Boolean(languageMenu)}
                  onClose={this.handleLanguageMenuClose}
                  >
                    {languages.map(language => (
                      <MenuItem
                      key={language.code}
                      selected={userLanguage === language.code}
                      onClick={this.handleLanguageMenuItemClick(language.code)}
                      >
                      {language.text}
                      </MenuItem>
                    ))}
                  </Menu>
                  <Tooltip title="Edit docs colors" enterDelay={300}>
                  <IconButton
                  color="inherit"
                  aria-label="Edit docs colors"
                  href="/style/color/#color-tool"
                  >
                    <ColorsIcon />
                  </IconButton>
                  </Tooltip>
                  <Tooltip title="Toggle light/dark theme" enterDelay={300}>
                  <IconButton
                  color="inherit"
                  onClick={this.handleTogglePaletteType}
                  aria-label="Toggle light/dark them"
                  >
                    {reduxTheme.paletteType === 'light' ? (
                      <LightbulbOutlineIcon />
                    ): (
                      <LightbulbFullIcon />
                    )}
                  </IconButton>
                  </Tooltip>
                  <Tooltip title="Toggle right-to-left/left-to-right" enterDelay={300}>
                    <IconButton
                    color="inherit"
                    onClick={this.handleToggleDirection}
                    aria-label="Toggle right-to-left/left-to-right"
                    >
                      {reduxTheme.direction === 'rtl' ? (
                        <FormatTextdirectionLToR />
                      ): (
                        <FormatTextdirectionRToL />
                      )}
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Github repository" enterDelay={300}>
                    <IconButton
                    component="a"
                    color="inherit"
                    href="https://github.com/prince1809/react-ui"
                    aria-label="Github repository"
                    >
                      <GithubIcon />
                    </IconButton>
                  </Tooltip>
                </Toolbar>
              </AppBar>
              <AppDrawer
              className={classes.drawer}
              disablePermanent={disablePermanent}
              onClose={this.handleDrawerClose}
              onOpen={this.handleDrawerOpen}
              mobileOpen={this.state.mobileOpen}
               />
               {children}
            </div>
          )
        }}
      </PageTitle>
    );
  }
}

AppFrame.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  reduxTheme: PropTypes.object.isRequired,
  userLanguage: PropTypes.string.isRequired,
};

export default compose(
  connect(state => ({
    reduxTheme: state.theme,
    userLanguage: state.options.userLanguage,
  })),
  withStyles(styles),
)(AppFrame);