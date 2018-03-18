import React from 'react'
import { connect } from 'react-redux'

import SignInOrUpComponent from '../../components/mySpotify/SignInOrUpComponent'

import signAction from '../../actions/mySpotify/signInOrUpAction'

const mapDispatchToProps = (dispatch) => ({
    onClickLogin: (data) => dispatch(signAction.signInOrUp(data))
})

const SignInOrUpContainer = connect(
    null,
    mapDispatchToProps
)(SignInOrUpComponent)

export default SignInOrUpContainer