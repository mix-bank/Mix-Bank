import React from 'react'
import Transaction from './Transaction'
import cookie from 'react-cookie';
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
  constructor(props) {
    super(props);

    this.state =  { userId: cookie.load('userId') };
  }

  componentDidMount(){
    const { fetchAccountTransaction } = this.props
    console.log(this.state);
    fetchAccountTransaction()
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
