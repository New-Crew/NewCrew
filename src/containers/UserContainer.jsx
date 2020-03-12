import AdminLogin from './AdminContainer.jsx'
import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import PrefContainer from '../components/PrefContainer.jsx'
import GroupContainer from '../components/GroupContainer.jsx'


const UserContainer = () => {
    const navStyle = {
        color: 'black'
      }

    return (
        <Router>
        <div>
            <Link style={navStyle} to="/prefs">
                <p>Preferences</p>
            </Link>
            <Link style={navStyle} to="/groups">
                <p>Groups</p>
            </Link>
        </div>
        <Switch>
          <Route path="/prefs" component={PrefContainer} />
          <Route path="/groups" component={GroupContainer} />
        </Switch>

        </Router>

    )
}

export default UserContainer;