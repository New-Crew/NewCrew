// loginContainer renders the loginForm

import React, { Component } from 'react';
import LoginForm from '../components/LoginForm.jsx'
import AdminLogin from '../components/AdminLogin.jsx'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function LoginContainer() {

    return (
        <Router>
            <div className="login">

                <Route path="/" component={LoginForm} />
                <Route path="/admin" component={AdminLogin} />

                {/* <Route exact path="/admin" render={() => (<AdminLogin />)} /> */}


            </div>
        </Router>
    )
}

export default LoginContainer;