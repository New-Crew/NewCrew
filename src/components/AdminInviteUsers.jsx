//  this is the component that will show when admins want to invite users to their org

// ** this is almost working but we're still getting an error back from the database

import React, { Component, useState, useEffect } from 'react';
import AdminMainConsole from './AdminMainConsole.jsx'


function AdminInviteUsers() {
    const [invited, setInvites] = useState(false)
    const [users, setUsers] = useState('')

    function inviteUsers() {
        // when the invite button is clicked, we'll send a POST request to our backend to add the users to the db. We'll then display a "signal of successful invite" and then the list of invited users for the admin
        event.preventDefault()
        console.log("users ", users);
        const stringify = JSON.stringify(users)
        console.log("stringify: ", users);
        const headers = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: stringify
        }

        fetch('/addUser', headers)
            .then((data) => data.json())
            .then((response) => {
                console.log("response from addUser: ", response)
            })
    }

    return (
        <div className="inviteUsers">
            <AdminMainConsole />
            <label>Invite Users</label><br />
            <input className="invited" id="invited" placeholder="Enter use emails separated by commas" onChange={(event) => setUsers(event.target.value)}></input><br />
            <input type="submit" onClick={inviteUsers}></input>
            <br />

        </div>
    )
}

export default AdminInviteUsers;