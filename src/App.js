import React, { Component } from 'react';
import { render } from 'react-dom';
import LoginContainer from './containers/LoginContainer.jsx';


const rootContainer = document.getElementById("root");

render(
    // <LoginContainer />
    
    (<Router>
        <div className="login">

            <Route path="/" component={LoginForm} />
            <Route path="/admin" component={AdminLogin} />

            {/* <Route exact path="/admin" render={() => (<AdminLogin />)} /> */}


        </div>
    </Router>)
    
    , rootContainer);

console.log('index.jsx ran');
