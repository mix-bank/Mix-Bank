import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import domready from 'domready'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers/reducer.js'

let store = createStore(reducers, compose(
    applyMiddleware(thunkMiddleware)
))




domready(() => {
  ReactDOM.render(
    <div>
      <h1>Here</h1>
      <Provider store={store}>
        <App/>
      </Provider>
    </div>,
    document.querySelector('#app')
  )
})
