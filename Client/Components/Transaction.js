import React from 'react'

const Account = ({data}) => {

  const displayData = () => {

    return(
      data.map((data, i) => {
        return (
          <tr key={i}>
            <td>{data.amount}</td>
            <td>{data.description}</td>
            <td>{data.from_account_id}</td>
            <td>{data.to_account_id}</td>
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
            <th>Amount</th>
            <th>Description</th>
            <th>From</th>
            <th>To</th>
          </tr>
        </thead>
          <tbody>{displayData()}</tbody>
      </table>
    </div>
  )
}


module.exports = Account
