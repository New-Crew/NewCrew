// first option is a Q asking if they're creating a new team - if so, a required input field will appear for the organization name. They'll then enter their email and password and click a button that reads "create team"

// if they're not creating a new team, they'll see just the email and password options + a login button

import React, { Component, useState, useEffect } from 'react';

const AdminLogin = () => {
    const [isAdmin, setAdmin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [orgName, setOrgName] = useState('');


    // this function will first check to see if the email submitted exists in the user database. If it does, that means the user is able to join. If it doesn't exist, we should send a message to the frontend to let them know they haven't been added to a team yet (maybe an alert to let them know to talk to an admin)
    const handleSubmit = () => {
        event.preventDefault()
        // check if isAdmin is true - if so, don't check database for existence
        // post email, password, and orgName to the admin database
        // redirect admin to admin portal

        // if isAdmin is false, check database for user email
        // if user email exists, redirect user to user portal
        // if user email does not exist, display/alert an error message that they haven't been invited.
        console.log('email: ', email)
        console.log('password: ',password)
        console.log('orgName: ',orgName)


    }

    return (
        <div>
            <form>
                {/* <label>Are you creating a new organization?</label>
                <br />
                <input type="radio" name="isAdmin" defaultChecked="checked"></input>
                <label>Yes</label>
                <br />

                <input type="radio" name="isAdmin"></input>
                <label>No</label>
                <br />
                <br /> */}
                <label>What is the name of your organization?</label>
                <br />
                <input type="text" placeholder="enter your organization name?" id="orgName" name="orgName" onChange={(event) => setOrgName(event.target.value)}></input>
                <br />
                <br />
                <label>Username</label>
                <br />
                <input type="text" placeholder="enter your email" id="email" name="email" onChange={(event) => setEmail(event.target.value)}></input>
                <br />
                <br />
                <label>Password</label>
                <br />
                <input type="text" placeholder="enter your password" id="password" name="password" onChange={(event) => setPassword(event.target.value)}></input>
                <br />
                <input type="submit" onClick={() => handleSubmit()} ></input>
            </form>
        </div>
    )
}

export default AdminLogin;