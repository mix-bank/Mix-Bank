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
 console.log(dispatch);
  return {
    transactionsAction: bindActionCreators(fetchAccountTransaction, dispatch)
  }
}

class App extends React.Component {

  componentWillMount(){
      this.props.fetchAccountTransaction
  }

  render() {
    console.log('props', this.props)
    return (
      <div>
        <h1>Hello there</h1>
      </div>
    )
  }
}

export default connect(
  null, mapDispatchToProps
)(App)

// module.exports = App
