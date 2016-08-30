import request from 'superagent'

const receiveAccountTransaction = function () {
  return {
    type: 'GET_ACCOUNT_TRANSACTIONS',
    payload: {
      account: {
        id: 1,
        transactions:[
          {
            id:503,
            amount: 456,
            description: 'purchase bk',
            from_account_id: 1,
            to_account_id: 2
          },
          {
            id:504,
            amount: 56700,
            description: 'weekly pay from bk',
            from_account_id: 2,
            to_account_id: 1
          }
        ]
      }
    }
  }
}

export function fetchAccountTransaction () {
  return (dispatch) => {
    request
      .get('/api/v1/accounts/:id/transactions')
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(retrieveData(res.body.data.account.transactions))
      })
  }
}

  module.exports={retrieveData}
