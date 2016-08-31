function accountData (state = [], action) {
  switch (action.type) {
    case 'GET_ACCOUNT_TRANSACTIONS':

      return [...action.payload]

    case 'MAKE_NEW_TRANSACTION':

      let newState = Object.assign({}, action.payload)

    default:
      return state
  }
}

export default accountData
