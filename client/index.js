import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import history from './history'
import store from './store'
import App from './app'
// import {firestore} from 'firebase'
// import admin from 'firebase-admin'

// admin.initializeApp({
//   credential: admin.credential.applicationDefault(),
//   databaseURL: 'https://traveltogethere-ba294.firebaseio.com'
// })

// establishes socket connection
import './socket'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
)
