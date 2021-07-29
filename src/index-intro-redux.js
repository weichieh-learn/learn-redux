import React from 'react'
import render from 'react-dom'
import App from './App'
import { createStore } from 'redux'

//==ACTION WILL DO, AND REDUCER WILL CHECK AND THEN MODIFIED STORE==

//【1-STORE】: global state/data for our App (GLOBALIZED STATE)

//【2-ACTION】: describe what you want to do
//想做甚麼動作，例如我餓了想買東西吃，但不是真的去買，只是將行為給個名字
//function that returns an object
const increment = () => {
  return {
    type: 'INCREMENT',
  }
}
const decrement = () => {
  return {
    type: 'DECREMENT',
  }
}
//【3-REDUCER】: describe how your actions transform the state into the next state
//看dispatch要執行什麼樣的動作
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return 0
  }
}

let store = createStore(counter)

//Display in the console
store.subscribe(() => console.log(store.getState()))

//【4-DISPATCH】: the way we actually excute that action
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(decrement())

// render(<App />)
