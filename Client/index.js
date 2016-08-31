import React from 'react'
import ReactDOM from 'react-dom'
import App from './Components/App'
import domready from 'domready'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers/reducer.js'

let store = createStore(reducers, compose(
    applyMiddleware(thunk)
))

// console.log(store.getState());


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
