import React from 'react'
import Transaction from './Transaction'
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
    const id = window.location.pathname.split('/');
    fetchAccountTransaction(id[id.length - 1])
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
        <button className="btn btn-primary sign-out-button" onClick={this.handleClick.bind(this)}>Sign Out</button>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

// module.exports = App
