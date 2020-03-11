// first option is a Q asking if they're creating a new team - if so, a required input field will appear for the organization name. They'll then enter their email and password and click a button that reads "create team"

// if they're not creating a new team, they'll see just the email and password options + a login button
import UserContainer from '../containers/UserContainer.jsx'
import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory } from 'react-router-dom'

const LoginForm = () => {
    const [isAdmin, setAdmin] = useState(false);
    const [isUser, setUser] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // this function will first check to see if the email submitted exists in the user database. If it does, that means the user is able to join. If it doesn't exist, we should send a message to the frontend to let them know they haven't been added to a team yet (maybe an alert to let them know to talk to an admin)
    const userLogin = (event) => {
        event.preventDefault()
        console.log('email: ', email)
        console.log('password: ', password)

        // const stringify = JSON.stringify({ email, password })
        // const headers = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: stringify
        // }


        if (email === 'abc') {
            setUser(true)
        }

        // const fetchItems = () => {
        //     fetch('/createUser', headers)
        //     .then((data) => data.json())
        //     .then((response) => {
        //         const {email} = response
        //         if(email === true) {

        //         }
        //     })

        // }

    }

    if (isUser === true) {
        return (<Redirect to="/user" path />)
    }

    return (
        <div>
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
                <input type="submit" onClick={userLogin} ></input>
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