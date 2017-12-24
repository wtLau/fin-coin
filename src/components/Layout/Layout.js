import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

import './style.css';

const Layout = ({ children }) => (
    <div className="appContentWrapper">
        <div className="appHeader">
            <Header />
        </div>
        <div className="appContent">
            {children}
        </div>
        <Footer />
    </div>
);

Layout.defaultProps = {
    children: null
};

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;
