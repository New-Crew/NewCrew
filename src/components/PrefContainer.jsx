import React, { Component, useState, useEffect } from 'react';
import '../App.css';
import { template } from '@babel/core';


const PrefContainer = () => {
  const temp = {
    '11': 'Abaas',
    '12': 'Nat',
    '13': 'Chelsey',
    '14': 'David',
  }
  
  const [email, setEmail] = useState('david@gmail.com');
  const [password, setPassword] = useState('password');
  const [user_id, setUserID] = useState(0);
  const [stack, setStack] = useState('');
  const [skill, setSkill] = useState(0);
  const [indivPref, setIndivPref] = useState({});
  const [teamPrefs, setTeamPrefs] = useState(temp);

  useEffect(() => {
    fetchPrefs();
    // checkPrefs();
  },[]);

  const checkPrefs = () => {
    for(ele of array) {
      if (ele.checked){
        console.log(ele.name)
      }
    }
  }

  const stringify = JSON.stringify({ email, password })

  const headers = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: stringify
  }
  const fetchPrefs = () => {
    fetch('/login', headers)
      .then((data) => data.json())
      .then((response) => {
        const {_id, email} = response[0]
        // setTeamPrefs(response[1])
        setUserID(_id);
        setEmail(email)
      })
  }

  const addPref = (event) => {
    event.preventDefault()
    console.log(event.target.name)
    console.log(event.target.id)
    // setTeamPrefs(teamPrefs[event.target.name] = event.target.id)

  }

  const array = []
  for(let ele in teamPrefs){
    array.push(
    <li key={ele}> {teamPrefs[ele]}
      <p></p>
      <span className="radio-button__label">1</span>
      <input type="radio" name={`${ele}`} id='1' onChange={addPref}></input>
      <span className="radio-button__label" >2</span>
      <input type="radio" name={`${ele}`} id='2' onChange={addPref}></input>
      <span className="radio-button__label">3</span>
      <input type="radio" name={`${ele}`} id='3' onChange={addPref}></input>
    </li>
    )}

    const submitBTN = () => {
      event.preventDefault()

      const stringify = JSON.stringify({user_id, stack, skill, teamPrefs})

      const headers = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: stringify
      }

      fetch('/login', headers)
          .then((data) => data.json())
          .then((response) => {
              console.log("response", response)
              if (response.length > 0) {
                  setLogin(true);
              } else {
                  alert("reach out to your admin for an invite")
              }
          })
    }

  return(
    <div>
      <p>Preferences</p>

      <button className="dropbtn">Dropdown</button>
      <div className="dropdown">
        <div className="dropdown-content">
          <a href="#">FE</a>
          <a href="#">BE</a>
          <a href="#">FS</a>
        </div>
      </div>

      <input type="text" placeholder="enter your skill (1-9)" id="email" onChange={(event) => setEmail(event.target.value)}></input>

      <ul>
          {array}
      </ul>
      <input type="submit" onClick={submitBTN} ></input>
    </div>
  )
}

export default PrefContainer;
