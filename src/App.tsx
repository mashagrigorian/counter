import React, { useState } from 'react';
import { UsersType } from './index';

function findMax(users: UsersType) {
  let maxPair = null

  for(let i = 0; i < users.length; i++) {
    if(maxPair === null) {
      maxPair === users[i]
    } else if (Math.max(users[i][0], users[i][1]) > Math.max(maxPair[0], maxPair[1])) {
      maxPair = users[i]
    }
  }
  return maxPair
}


export const App = ( {users}: { users: UsersType }) => {


 let [player1Counter, setPlayer1Counter] = useState(() => {
    let pair = findMax(users)
    if(pair === null) {
      return 10
  } 
  return pair[0]
})
  let [player2Counter, setPlayer2Counter] = useState(() => {
    let pair = findMax(users)
    if(pair === null) {
      return 10
  }
  return pair[1]
  })

  let [counters, setCouters] = useState({
    c1: 10,
    c2: 10
  })

  return (
    <div className='counter-up'>
      <div className='content'>
      <div className='box'>
        <div className='text'>Ivan Ivanich</div>
        <div>{player1Counter}</div>
        <button className='icon' onClick={() => {
          setPlayer1Counter((actual) => actual + 1)
          }}>+</button>
      </div>
      <hr />
      <div className='box'>
        <div className='text'>Petr Petrovich</div>
        <div>{player2Counter}</div>
        <button className='icon' onClick={() => {
          setPlayer2Counter((actual) => actual + 1)
        }}>+</button>
      </div>
      <hr/>
      <button onClick={() => {
        setPlayer1Counter((actual) => actual - 1)
        setPlayer2Counter((actual) => actual - 1)
      }}>-</button>
      <button onClick={() => {
        setPlayer1Counter(10)
        setPlayer2Counter(10)
      }}>reset</button>
      </div>
      </div>
  );
}