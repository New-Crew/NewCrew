import React, { Component, useState, useEffect } from 'react';
import AdminMainConsole from './AdminMainConsole.jsx'

// ** need to finish this GET request once we have the endpoint setup

function AdminManageMembers() {
    const [viewMembers, setMembers] = useState(false);

    useEffect(() => {
        const headers = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        }
        fetch('/GETALLMEMBERS', headers)
            .then((data) => data.json())
            .then((response) => {
                console.log("response[0]", response[0])
                // once we have fetched all the groups, we can display them for the admin
                setMembers(true);
            })
    })

    if (viewMembers === true) {
        // create a list of all members returned from the db and render it to the user
    }

    return (
        <div className="generate">
            <AdminMainConsole />

        </div>
    )
}
export default AdminManageMembers;