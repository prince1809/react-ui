import React from 'react';
import PropTypes from 'prop-types';



class AppFrame extends React.Component {


    render() {

        const {children} = this.props;

        return (
            <div>
                appframes
                {children}
            </div>
        );
    }
}

export default AppFrame;