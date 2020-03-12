// this component shows when the admin has selected that they are therefore an Admin
import React, { Component, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Nav from './Nav.jsx'

const AdminLogin = () => {
    const [isLogged, setLogin] = useState(false);
    const [admin, setAdmin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [orgName, setOrgName] = useState(null);


    const handleClick = () => {
        console.log("email: ", email);
        console.log("password: ", password)
        // add admin to the database
        event.preventDefault()

        const stringify = JSON.stringify({ email, password, admin })
        const headers = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: stringify
        }

        fetch('/signup', headers)
            .then((data) => data.json())
            .then((response) => {
                console.log("response[0]", response[0].admin)
                const { admin } = response[0]
                if (admin === true) {
                    setLogin(true);
                } else {
                    alert("you're not an admin")
                }
            })
    }

    if (isLogged === true) {
        //redirects to admin console once Admin has been added to the database
        return (<Redirect to="/manage" path />)
    }


    return (

        <div>
            <Nav />
            <form>
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
                <input type="submit" onClick={handleClick}>Create Team</input>
            </form>
        </div>
    )
}

export default AdminLogin;