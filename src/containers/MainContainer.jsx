// MainContainer renders the loginForm

import React, { Component } from 'react';
import LoginForm from '../components/LoginForm.jsx'
import AdminContainer from './AdminContainer.jsx'
import AdminLogin from '../components/AdminLogin.jsx'
import UserContainer from './UserContainer.jsx'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import AdminCreateGroups from '../components/AdminCreateGroups.jsx';
import AdminInviteUsers from '../components/AdminInviteUsers.jsx';
import AdminMainConsole from '../components/AdminMainConsole.jsx';
import AdminManageMembers from '../components/AdminManageMembers.jsx';

function MainContainer() {

    return (
        <Router>
            {/* <Nav /> */}
            <Switch>
                <Route exact path="/">
                    <LoginForm />
                </Route>
                <Route path="/admin">
                    <AdminLogin />
                </Route>
                <Route path="/user">
                    <UserContainer />
                </Route>
                <Route path="/manage">
                    <AdminContainer />
                </Route>
                <Route path="/create">
                    <AdminCreateGroups />
                </Route>
                <Route path="/invite">
                    <AdminInviteUsers />
                </Route>
                <Route path="/main">
                    <AdminMainConsole />
                </Route>
                <Route path="/groups">
                    <AdminManageMembers />
                </Route>

            </Switch>
        </Router>
    )
}

export default MainContainer;