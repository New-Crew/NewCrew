// this container will be routed to when an admin creates a new organization
// it will first render the AdminMainConsole

import React, { Component } from 'react';
import AdminConsole from '../components/AdminMainConsole';
import AdminInviteUser from '../components/AdminInviteUsers'
import AdminCreateGroups from '../components/AdminCreateGroups'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function AdminContainer() {

    return (

        <div className="AdminConsole">
            // will need to render certain components depending on what selections the admin makes
            <AdminConsole />
            <AdminCreateGroups />
            <AdminInviteUser />
        </div>
    )
}