import React, { Component } from 'react';
import { render } from 'react-dom';
import LoginContainer from './containers/LoginContainer.jsx';

const rootContainer = document.getElementById("root");

render(<LoginContainer />, rootContainer);

