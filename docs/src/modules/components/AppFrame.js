import React from 'react';
import PropTypes from 'prop-types';

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

import MenuIcon from '@material-ui/icons/Menu';
import LanguageIcon from '@material-ui/icons/Language';
import ColorsIcon from '@material-ui/icons/InvertColors';

import PageTitle from 'docs/src/modules/components/PageTitle';
import AppDrawer from 'docs/src/modules/components/AppDrawer';
import AppSearch from 'docs/src/modules/components/AppSearch';







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

    },
    navIconHide: {

    },
});

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

class AppFrame extends React.Component {

    state = {
        languageMenu: null,
        mobileOpen: false,
    };

    handleDrawerOpen = () => {
        this.setState({mobileOpen: true});
    };

    handleDrawerClose = () => {
        this.setState({ mobileOpen: false});
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
                        // home route
                        disablePermanent = true;
                        appBarClassName += ` ${classes.appBarHome}`;
                    } else {
                        navIconClassName = classes.navIconHide;
                        appBarClassName += ` ${classes.appBarShift}`;
                    }

                    return (
                        <div className={classes.root}>
                            {/* <NProgressBar /> */}
                            <CssBaseline />
                            <AppBar className={appBarClassName}>
                                <Toolbar>
                                    <IconButton
                                        color="inherit"
                                        aria-label="Open drawer"
                                        onClick={this.handleDrawerOpen}
                                        className={navIconClassName}>
                                        <MenuIcon />
                                    </IconButton>
                                    {title !== null && (
                                        <Typography>
                                            {title}
                                        </Typography>
                                    )}
                                    <div className={classes.grow} />
                                    <AppSearch />
                                    <Tooltip title="Change language" enterDelay={300}>
                                        <IconButton
                                            color="inherit"
                                            aria-owns={languageMenu ? 'language-menu' : undefined}
                                            aria-haspopup="true"
                                            onClick={this.handleLanguageIconClick}
                                            data-ga-event-category="AppBar"
                                            data-ga-event-action="language">
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
                                                onClick={this.handleLanguageMenuItemClick(language.code)}>
                                                {language.text}
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                    <Tooltip title="Edit docs colors" enterDelay={300}>
                                        <IconButton
                                            color="inherit"
                                            aira-label="Eidt docs colors"
                                            href="/style/color/#color-tool"
                                            data-ga-event-category="AppBar"
                                            data-ga-event-action="colors"
                                        >

                                            <ColorsIcon />
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
                    );
                }}
            </PageTitle>
        );
    }
}

AppFrame.propTypes = {
    children: PropTypes.node.isRequired,
    classes: PropTypes.object.isRequired,
    //dispatch: PropTypes.func.isRequired,
    //reduxTheme: PropTypes.object.isRequired,
    //userLanguage: PropTypes.string.isRequired,
}

export default withStyles(styles)(AppFrame);