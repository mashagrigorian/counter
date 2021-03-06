import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';

export type UsersType = Array<[number, number]>
const users: UsersType = [
  [40, 20],
  [10, 10],
  [1,2]
]


ReactDOM.render(<App users = {users} />, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
