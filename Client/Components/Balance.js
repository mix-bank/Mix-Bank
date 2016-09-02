import React from 'react'

const Balance = ({totalMoney}) => {

  // const addBalance = () => {
  //   console.log("elephants", totalMoney)
  //   if (totalMoney) {
  //   console.log("this is the total money: ", totalMoney)
  //   return(
  //       return current + previous)
  //   )}
  // }

  return (
    <div>
      <h3>Total Balance</h3>
      <p>${totalMoney}</p>
    </div>
  )
}


module.exports = Balance
