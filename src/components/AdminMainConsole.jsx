import { Link } from 'react-router-dom'
import React, { Component, useState, useEffect } from 'react';


function AdminMainConsole() {
    const [invite, setInvites] = useState(null);

    if (invite === true) {

    }

    return (
        <nav>
            <h3>Manage your team!</h3>
            <ul>
                <Link to="/create">
                    <li>Generate & Manage Groups</li>
                </Link>
                <Link to="/invite">
                    <li>Invite Users</li>
                </Link>
                <Link to="/groups">
                    <li>Manage Organization</li>
                </Link>
            </ul>
        </nav>
    )
}

export default AdminMainConsole;