import React from 'react'
import Transaction from './Transaction'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { receiveAccountTransaction, fetchAccountTransaction } from '../actions/action'

const mapStateToProps = (state) => {
  return {
    data: state.accountData
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchAccountTransaction }, dispatch)
}

class App extends React.Component {

  componentDidMount(){
    const { fetchAccountTransaction } = this.props
    fetchAccountTransaction();
  }


  render() {
    const { data } = this.props
    return (
      <div>
        <Transaction data={data}/>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

// module.exports = App
