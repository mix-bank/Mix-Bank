import React from 'react'

const Account = ({data}) => {

  const displayData = () => {

    return(
      data.map((data, i) => {
        return (
          <div key={i}>
            <li>{data.id}</li>
            <li>{data.amount}</li>
            <li>{data.description}</li>
          </div>
        )
      })
    )
  }

  return (
    <div>
      <ul>{displayData()}</ul>
    </div>
  )
}


module.exports = Account
