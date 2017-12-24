import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App.js';
import registerServiceWorker from './registerServiceWorker';

// import Layout from './components/Layout';
// import Routes from './routes/';
// import { loadLoginAuth } from './redux/modules/auth';
// import { FirebaseAuth } from './config/firebase';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
