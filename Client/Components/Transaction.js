import React from 'react'
import Balance from './Balance'

const Account = ({data}) => {

  let amount = 0

  const displayData = () => {

    return(
      data.map((data, i) => {
        // console.log(data.amount)
        console.log(amount)
        amount += data.amount/100
        return (
          <tr key={i}>
            <td>{i+1}</td>
            <td>{data.description}</td>
            <td>{data.from_account_id}</td>
            <td>{data.to_account_id}</td>
            <td>${data.amount/100}</td>
          </tr>
        )
      })
    )
  }

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Transaction No.</th>
            <th>Description of Transaction</th>
            <th>From Account</th>
            <th>To Account</th>
            <th>Transaction Amount</th>
          </tr>
        </thead>
          <tbody>{displayData()}</tbody>
      </table>
      <Balance totalMoney={amount} />
      {console.log("this is data.amount: ", amount)}
    </div>
  )
}


module.exports = Account
