import ReactDOM from 'react-dom';

import React from 'react';
import Login from "./compents/Login/Login.js";
import Register from "./compents/Login/Register.js";
import { Router, Route ,Switch} from 'react-router';
import {createHashHistory} from 'history';
let history = createHashHistory();

ReactDOM.render((
    <Router history={history}>
        <Switch>
            <Route exact={true} path="/" component={Login}/>
            <Route exact={true} path="/register" component={Register}/>
        </Switch>
    </Router>),
    document.getElementById('container')
);