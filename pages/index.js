import React from 'react';
import PropTypes from 'prop-types';




let dependenciesLoaded = false;

class HomePage extends React.Component {

    render() {

        return (
            <h1>Hello world</h1>
        );
    }
}

const Page = HomePage

export default () => <Page />;