import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

import AppFrame from 'docs/src/modules/components/AppFrame';


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
    }
});

class HomePage extends React.Component {

    render() {

        const classes = this.props.classes;

        return (
            <AppFrame>
                <div className={classes.root}> hello </div>
            </AppFrame>
        );
    }
}

HomePage.propTypes = {
    classes: PropTypes.object.isRequired,
};

const Page = withStyles(styles)(HomePage);

export default () => <Page />;