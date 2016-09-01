import React from 'react'

const Balance = ({totalMoney}) => {

  const addBalance = () => {
    if (totalMoney) {
    console.log(totalMoney);
    return(
      totalMoney.reduce((current, previous) => {
        return current + previous
      })
    )}
  }

  return (
    <div>
      <h3>Total Balance</h3>
      <p>{addBalance()}</p>
    </div>
  )
}


module.exports = Balance
