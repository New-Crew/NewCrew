// loginContainer renders the loginForm

import React, { Component } from 'react';
import Nav from '../components/Nav.jsx'
import LoginForm from '../components/LoginForm.jsx'
import AdminLogin from '../components/AdminLogin.jsx'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

function LoginContainer() {

    return (
        <Router>
            <div className="login">
            <Nav/>
                <Switch>
                    <Route exact path="/">
                        <LoginForm />
                    </Route>
                    <Route path="/admin">
                        <AdminLogin />
                    </Route>

                    {/* <Route exact path="/admin" render={() => (<AdminLogin />)} /> */}

                </Switch>
            </div>
        </Router>
    )
}

export default LoginContainer;