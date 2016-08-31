import React from 'react'
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

  displayData(){
    console.log("display?");
    const { data } = this.props;
      return (
        <div>
          <ul>
            {
              data.map((data) => {
                return (
                  <div>
                    <li>{data.id}</li>
                    <li>{data.amount}</li>
                    <li>{data.description}</li>
                  </div>
                )
              })
            }
          </ul>
        </div>
      )
  }

  render() {
    return (
      <div>
        <h1>Hello there</h1>
        {this.displayData()}
      </div>
    )
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(App)

// module.exports = App
