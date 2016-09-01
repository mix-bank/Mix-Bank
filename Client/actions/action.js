import request from 'superagent'
import initialState from '../initialstate.js'
import React from 'react'


function receiveAccountTransaction (data) {
 return {
   type: 'GET_ACCOUNT_TRANSACTIONS',
   payload: data
 }
}

function signOut () {
 return {
   type: 'SIGN_OUT',
   payload: window.location.href = '/users'
 }
}

function fetchAccountTransaction (id) {
 return (dispatch) => {
   request
   .get(`/api/v1/accounts/${id}/transactions`)
   .end((err, res) => {
       if (err) {
         console.error(err.message)
         return
       }
       dispatch(receiveAccountTransaction(JSON.parse(res.text)))
     })
 }
}

function signOutButton () {
  return (dispatch) => {
    request
    .get('/users/sign-out')
    .end((err, res) => {
      if (err) {
        console.error(err.message)
        return
      }
      dispatch(signOut())
    })
  }
}
 module.exports={
   receiveAccountTransaction,
   fetchAccountTransaction,
   signOutButton
 }
