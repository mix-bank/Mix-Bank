import React from 'react'
import { connect } from 'react-redux'
import { receiveAccountTransaction, fetchAccountTransaction } from '../actions/action'

const mapDispatchToProps = (dispatch) => {
 console.log(dispatch);
  return {
      action: dispatch(fetchAccountTransaction())
  }

}

class App extends React.Component {

  componentWillMount(){
      this.props.fetchAccountTransaction
  }

  render() {
    console.log('props', this.props.action)
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    )
  }
}

export default connect(
  null, mapDispatchToProps
)(App)

// module.exports = App
