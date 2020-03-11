// this component shows when the admin has selected that they are therefore an Admin
import React, { Component, useState, useEffect } from 'react';

const AdminLogin = () => {
    const [isAdmin, setAdmin] = useState(true);
    //isAdmin is set to true in this component as they've already made a selection
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [orgName, setOrgName] = useState('');


    // this function will add the admin to the database
    const handleCreate = () => {

        console.log("handleSubmit works!!")

    }
    console.log("in router");
    return (
        <div>
            <form>
                <label>Are you creating a new organization?</label>
                <br />
                <input type="radio" name="isAdmin" defaultChecked="checked"></input>
                <label>Yes</label>
                <br />

                <input type="radio" name="isAdmin"></input>
                <label>No</label>
                <br />
                <br />
                <label>What is the name of your organization?</label>
                <br />
                <input type="text" placeholder="enter your organization name?" id="orgName" name="orgName" ></input>
                <br />
                <br />
                <label>Username</label>
                <br />
                <input type="text" placeholder="enter your email" id="email" name="email" ></input>
                <br />
                <br />
                <label>Password</label>
                <br />
                <input type="text" placeholder="enter your password" id="password" name="password"></input>
                <br />
                <input type="submit" onClick={() => handleCreate()} ></input>
            </form>
        </div>
    )
}

export default AdminLogin;