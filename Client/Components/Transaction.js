import React from 'react'
import Balance from './Balance'

const Account = ({data}) => {

  const displayData = () => {

    return(
      data.map((data, i) => {
        console.log(data);
        return (
          <tr key={i}>
            <td>{i+1}</td>
            <td>{data.description}</td>
            <td>{data.from_account_id}</td>
            <td>{data.to_account_id}</td>
            <td>{data.amount}</td>
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
      <Balance totalMoney={data.amount} />
    </div>
  )
}


module.exports = Account
