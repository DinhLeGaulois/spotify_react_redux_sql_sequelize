import React from 'react'
import { connect } from 'react-redux'
require('../../style.scss')

import signAct from '../../actions/mySpotify/signInOrUpAction'

import MainUIComponent from '../../components/mySpotify/MainUIComponent'

const mapStateToProps = (state) => ({
    status: state.menu.mainStatus
})

const mapDispatchToProps = (dispatch) => ({
    setAddUI: () => { dispatch(signAct.setAdd()) },
    setDisplayUI: () => { dispatch(signAct.setDisplay()) },
    setSignInOrUp: () => {dispatch(signAct.signInOrUp())},
    setSignOut: () => {dispatch(signAct.signOut())}
})

const MainUIContainer = connect(
    mapStateToProps
)(MainUIComponent)

export default MainUIContainer