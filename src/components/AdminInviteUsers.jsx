//  this is the component that will show when admins want to invite users to their org

import React, { Component } from 'react';

function AdminInviteUsers() {


    return (
        <div className="inviteUsers">
            <form>
                <label>Invite Users</label><br />
                <input className="bulkInvite"></input>
            </form>
        </div>
    )
}

export default AdminInviteUsers;