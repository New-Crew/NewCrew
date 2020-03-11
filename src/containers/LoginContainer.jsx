// loginContainer renders the loginForm

import React, { Component } from 'react';
import LoginForm from '../components/LoginForm.jsx'
import AdminLogin from '../components/AdminLogin.jsx'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function LoginContainer() {

    return (
        <Router>
            <div className="login">
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