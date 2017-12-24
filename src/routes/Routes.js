import React from 'react';
import { Route, Switch } from 'react-router-dom';


// import all components
// import PrivateRoute from '../components/PrivateRoute/';
import App from '../containers/App.js';
// import Login from '../containers/Login/';
// import Share from '../containers/Share/';
// import Profile from '../containers/Profile/';
// import NotFound from '../containers/NotFound/';
// import SignUp from '../containers/SignUp/';

const Routes = () => (
    <Route component={App} />
    // <Switch>
    // <PrivateRoute path="/signup" component={SignUp} />
    // <PrivateRoute exact path="/" component={Items} />
    // <PrivateRoute exact path="/shares" component={Items} />
    // <PrivateRoute exact path="/profile/:id" component={Profile} />
    // <PrivateRoute component={NotFound} />
    // </Switch>
);

export default Routes;
