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

    };

    handleToggleDirection = () => {

    };

    render() {

        const { children, classes, reduxTheme, userLanguage } = this.props;
        const { languageMenu } = this.state;

        return (
            <div className={classes.root}>
            <CssBaseline />
            <AppBar>
            Something
            </AppBar>
            </div>
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