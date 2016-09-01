function accountData (state = [], action) {
  switch (action.type) {
    case 'GET_ACCOUNT_TRANSACTIONS':

      return [...action.payload]

    case 'SIGN_OUT':

      return [...action.payload]

    default:
      return state
  }
}

export default accountData
