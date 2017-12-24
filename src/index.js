import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import Layout from './components/Layout';
import Routes from './routes/';
// import { loadLoginAuth } from './redux/modules/auth';
// import { FirebaseAuth } from './config/firebase';

const FinCoin = () => (
    // <MuiThemeProvider muiTheme={muiTheme}>
    // <ApolloProvider client={client} store={store}>
    <Router>
        <Layout>
            <Routes />
        </Layout>
    </Router>
    // </ApolloProvider>
    // </MuiThemeProvider>
);

ReactDOM.render(<FinCoin />, document.getElementById('root'));
registerServiceWorker();
