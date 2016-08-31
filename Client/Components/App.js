import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { receiveAccountTransaction, fetchAccountTransaction } from '../actions/action'

// const mapStateToProps = (state) => {
//   return {
//     fetch: fetchAccountTransaction()
//   }
// }

const mapDispatchToProps = (dispatch) => {
  console.log('inside mapDispatchToProps', dispatch);
  return {
    fetchAccountTransaction: () => {
      dispatch(fetchAccountTransaction())
    }
  }
}

class App extends React.Component {

  componentDidMount(){
      this.props.fetchAccountTransaction()
  }

  render() {
    console.log('inisde the render', this.props.accountData);
    return (
      <div>
        <h1></h1>
      </div>
    )
  }
}

export default connect(
  (state) => state, mapDispatchToProps
)(App)

// module.exports = App
