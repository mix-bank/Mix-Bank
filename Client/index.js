import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import domready from 'domready'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore()



domready(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App/>
     </Provider>,
    document.querySelector('#app')
  )
})
