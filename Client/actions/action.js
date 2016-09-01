import request from 'superagent'
import initialState from '../initialstate.js'
import React from 'react'


const receiveAccountTransaction = function (data) {
 return {
   type: 'GET_ACCOUNT_TRANSACTIONS',
   payload: data
 }
}

function fetchAccountTransaction () {
 return (dispatch) => {
   request
   .get('/api/v1/accounts/2/transactions')
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
  console.log("calling the function ", signOutButton);
  return (dispatch) => {
    request
    .get('/users/sign-out')
    .end((err, res) => {
      if (err) {
        console.error(err.message)
        return
      }
      dispatch()
    })
  }
}
 module.exports={
   receiveAccountTransaction,
   fetchAccountTransaction,
   signOutButton
 }
