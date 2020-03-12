// this container will be routed to when an admin creates a new organization


import React, { Component, useState, useEffect } from 'react';
import AdminMainConsole from '../components/AdminMainConsole.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function AdminContainer() {

    return (
        <div className="AdminConsole">
            <AdminMainConsole />
        </div>
    )
}

export default AdminContainer;


