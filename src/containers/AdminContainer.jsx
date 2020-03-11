// this container will be routed to when an admin creates a new organization
// it will first render the AdminMainConsole

import React, { Component } from 'react';
import AdminMainConsole from '../components/AdminMainConsole.jsx';
import AdminInviteUser from '../components/AdminInviteUsers.jsx'
import AdminCreateGroups from '../components/AdminCreateGroups.jsx'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function AdminContainer() {

    return (
// will need to render certain components depending on what selections the admin makes
        <div className="AdminConsole">
            <p> admin container</p>
            
            {/* <AdminMainConsole />
            <AdminCreateGroups />
            <AdminInviteUser /> */}
        </div>
    )
}

export default AdminContainer;


