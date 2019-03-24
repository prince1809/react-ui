import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import NProgressBar from '@material-ui/docs/NProgressBar';

import AppFrame from 'docs/src/modules/components/AppFrame';
import Head from 'docs/src/modules/components/Head';
import Link from 'docs/src/modules/components/Link';



let dependenciesLoaded = false;

function loadDependencies() {
    if (dependenciesLoaded) {
        return;
    }

    dependenciesLoaded = true;
}

const styles = theme => ({
    root: {
        flex: '1 0 100%',
    },
    hero: {
        minHeight: '80vh',
        flex: '0 0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.type === 'light' ? theme.palette.primary.dark : theme.palette.primary.main,
    },
    text: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        letterSpacing: '.7rem',
        textIndent: '.7rem',
        fontWeight: theme.typography.fontWeightLight,
        [theme.breakpoints.only('xs')]: {
            fontSize: 28,
        },
        whiteSpace: 'nowrap',
    },
    headline: {
        paddingLeft: theme.spacing.unit * 4,
        paddingRight: theme.spacing.unit * 4,
        marginTop: theme.spacing.unit,
        maxWidth: 500,
        textAlign: 'center',
    },
    content: {
        paddingBottom: theme.spacing.unit * 8,
        paddingTop: theme.spacing.unit * 8,
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing.unit * 12,
        },
    },
    button: {
        marginTop: theme.spacing.unit * 3,
    },
    logo: {
        margin: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 4}px`,
        width: '100%',
        height: '35vw',
        maxHeight: 200,
    },
    social: {
        backgroundColor: theme.palette.background.paper,
        padding: `${theme.spacing.unit * 2}px 0`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 20,
        boxSizing: 'content-box',
        '& span': {
            display: 'flex',
            marginRight: theme.spacing.unit,
        },
        '& a': {
            color: theme.palette.background.paper,
        },
    },
});

class HomePage extends React.Component {

    render() {

        const classes = this.props.classes;

        return (
            <AppFrame>
                <Head />
                <div className={classes.root}>
                    <div className={classes.hero}>
                        <div className={classes.content}>
                            <img
                                src="/static/images/material-ui-logo.svg"
                                alt="Material-UI Logo"
                                className={classes.logo}
                            />
                            <div className={classes.text}>
                                <Typography
                                    variant="h3"
                                    align="center"
                                    component="h1"
                                    color="inherit"
                                    gutterBottom
                                    className={classes.title}>
                                    {'MATERIAL-UI'}
                                </Typography>
                                <Typography
                                    variant="h5"
                                    component="h2"
                                    color="inherit"
                                    gutterBottom
                                    className={classes.headline}>
                                    {"React components that implement Google's Material Design."}
                                </Typography>
                                <Button
                                    component={buttonProps => (
                                        <Link naked prefetch href="/getting-started/installations" {...buttonProps} />
                                    )}
                                    className={classes.button}
                                    variant="outlined"
                                    color="primary">
                                    {'Get Started'}
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className={classes.social}>
                        <a
                            className="github-button"
                            href="https://github.com/prince1809/react-ui"
                            data-icon="octicon-star"
                            data-show-count="true"
                            aria-label="Star mui-org/material-ui on github">
                            Star</a>
                        <a
                            className="twitter-follow-button"
                            href="https://twitter.com/@materialui"
                            data-show-screen-name="false">Follow</a>
                    </div>
                </div>
            </AppFrame>
        );
    }
}

HomePage.propTypes = {
    classes: PropTypes.object.isRequired,
};

const Page = withStyles(styles)(HomePage);

export default () => <Page />;