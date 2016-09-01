import React from 'react'
import Transaction from './Transaction'
// import cookie from 'react-cookie';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { receiveAccountTransaction, fetchAccountTransaction, signOutButton } from '../actions/action'

const mapStateToProps = (state) => {
  return {
    data: state.accountData
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchAccountTransaction, signOutButton }, dispatch)
}

class App extends React.Component {

  componentDidMount(){
    const { fetchAccountTransaction } = this.props
    const id = window.location.pathname.split('/')
    const length = id.length - 1
    fetchAccountTransaction(id[length])
  }
handleClick(event) {
  const { signOutButton } = this.props
  signOutButton()
}
  render() {
    const { data } = this.props
    return (
      <div>
        <Transaction data={data}/>
        <button onClick={this.handleClick.bind(this)}>Sign Out</button>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

// module.exports = App
