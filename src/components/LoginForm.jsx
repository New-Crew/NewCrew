// first option is a Q asking if they're creating a new team - if so, a required input field will appear for the organization name. They'll then enter their email and password and click a button that reads "create team"

// if they're not creating a new team, they'll see just the email and password options + a login button
import UserContainer from '../containers/UserContainer.jsx'
import AdminContainer from '../containers/AdminContainer.jsx'
import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory } from 'react-router-dom'
import Nav from './Nav.jsx'

const LoginForm = () => {
    const [admin, setAdmin] = useState(false);
    const [isUser, setUser] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // this function will first check to see if the email submitted exists in the user database. If it does, that means the user is able to join. If it doesn't exist, we should send a message to the frontend to let them know they haven't been added to a team yet (maybe an alert to let them know to talk to an admin)
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

        fetch('/login', headers)
            .then((data) => data.json())
            .then((response) => {
                console.log("response from login", response[0].admin)
                if (response[0].admin === true) {
                    // if the user logging in is an admin
                    setAdmin(true);
                }
                else if (response[0]) {
                    // if the user logging in is found in the db
                    console.log("else if", response[0]);
                    setUser(true);
                } else {
                    // the user doesn't exist in the db
                    alert("reach out to your admin for an invite!")
                }
            })
    }

    if (isUser === true) {
        //redirects to user console once Admin has been added to the database
        return (<Redirect to="/user" path />)
    }

    if (admin === true) {
        return (<Redirect to="/manage" path />)
    }

    return (

        <div>
            <Nav />
            <form>
                <label>Username</label>
                <br />
                <input type="text" placeholder="enter your email" id="email" onChange={(event) => setEmail(event.target.value)}></input>
                <br />
                <br />
                <label>Password</label>
                <br />
                <input type="text" placeholder="enter your password" id="password" onChange={(event) => setPassword(event.target.value)}></input>
                <br />
                <input type="submit" onClick={handleClick} ></input>
            </form>
        </div>
    )
}

export default LoginForm;

   // check if isAdmin is true - if so, don't check database for existence
        // post email, password, and orgName to the admin database
        // redirect admin to admin portal

        // if isAdmin is false, check database for user email
        // if user email exists, redirect user to user portal
        // if user email does not exist, display/alert an error message that they haven't been invited.
        // console.log("userLogin works!!")
        // setEmail()