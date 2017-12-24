import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewsContainer extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <h1>News</h1>
            </div>
        )
    }
}

export default NewsContainer;