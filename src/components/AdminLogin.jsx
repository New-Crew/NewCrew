// this component shows when the admin has selected that they are therefore an Admin
import React, { Component, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const AdminLogin = () => {
    const [isLogged, setLogin] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [orgName, setOrgName] = useState('');


    const handleClick = () => {
        console.log("email: ", email);
        console.log("password: ", password)
        // add admin to the database
        event.preventDefault()
        // fetch-post email and password to the admin database
        if (email === "abc") {
            setLogin(true)
        }

    }

    if (isLogged === true) {
        //redirects to admin console once Admin has been added to the database
        return (<Redirect to="/manage" path />)
    }

    return (
        <div>
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
                <input type="submit" onClick={handleClick} ></input>
            </form>
        </div>
    )
}

export default AdminLogin;