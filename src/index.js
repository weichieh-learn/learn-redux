import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore } from 'redux'
import allReducers from './reducers'
import { Provider } from 'react-redux' //connect global STORE to our App

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

//【1-STORE】
//【2-ACTION】
//【3-REDUCER】
//【4-DISPATCH】
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
