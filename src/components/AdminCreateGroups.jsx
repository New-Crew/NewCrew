// this file will be rendered when the admin wants to generate groups

import React, { Component, useState, useEffect } from 'react';
import AdminMainConsole from './AdminMainConsole.jsx'

function AdminCreateGroups() {
    const [createGroups, setCreateGroups] = useState(false);


    function generateGroups() {
        // have a button that when clicked will send a fetch request to our backend to generate and retrieve the groups. If the generation is successful, set createGroups to true and render them on the page
    const headers = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: users
    }

    fetch('/addUser', headers)
        .then((data) => data.json())
        .then((response) => {
            console.log("response from addUser: ", response)
        })
    }

    if (createGroups === true) {
        // display groups
    }

    return (
        <div className="generate">
            <AdminMainConsole />
            <button onClick={generateGroups}>Generate Groups</button>
        </div>
    )
}
export default AdminCreateGroups;
