import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login'
import Profile from './pages/Profile'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route  path="/dngTeste/" exact component={Login} />
                <Route  path="/dngTeste/profile" exact component={Profile} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;