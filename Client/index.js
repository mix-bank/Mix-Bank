import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import domready from 'domready'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

let store = createStore(reducers, compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))




domready(() => {
  ReactDOM.render(
    <div>
    <h1>Here</h1>
    <Provider>
      <App/>

     </Provider>
     </div>,
    document.querySelector('#app')
  )
})
