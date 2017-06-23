import React from 'react'
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'
import Login from '../components/Login'
import { asyncStorageLoad, loggedInPristine, logIn, logOut } from '../actions'

const YourApp = (props) => {
  const { loggedIn, dispatchLoggedInPristine, dispatchAsyncStorageLoad, dispatchLogIn, dispatchLogOut } = props
  return loggedIn
    ? <Dashboard dispatchLogOut={dispatchLogOut} />
    : <Login
      dispatchLoggedInPristine={dispatchLoggedInPristine}
      dispatchLogIn={dispatchLogIn}
      loggedIn={loggedIn}
    />
}

YourApp.propTypes = {
  loggedIn: PropTypes.bool,
  dispatchLogIn: PropTypes.func.isRequired,
  dispatchLogOut: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchAsyncStorageLoad: () => { dispatch(asyncStorageLoad()) },
    dispatchLoggedInPristine: () => { dispatch(loggedInPristine()) },
    dispatchLogIn: (fbToken) => { dispatch(logIn(fbToken)) },
    dispatchLogOut: () => { dispatch(logOut()) },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(YourApp)
