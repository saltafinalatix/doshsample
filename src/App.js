import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreateCustomer from './main/CreateCustomer';
import Dashboard from './main/Dashboard';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Dashboard />
                </Route>
                <Route path="/createcustomer">
                    <CreateCustomer />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
