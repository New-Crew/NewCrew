import React, { Component, useState, useEffect } from 'react';


const GroupContainer = () => {

    useEffect(() => {
    // fetchPrefs();
  }, []);

  const fetchPrefs = async () => {
    const data = await fetch('/login');
    const users = await data.json()
    console.log(users)
    // setusers(users.results)
  }

  return(
    <p>Groups</p>

  )
}

export default GroupContainer;
