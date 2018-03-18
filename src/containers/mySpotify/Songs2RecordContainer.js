import React from 'react'
import { connect } from 'react-redux'

import Songs2RecordComponent from '../../components/mySpotify/Songs2RecordComponent'

const mapStateToProps = (state) => ({
    data: state.mySpotify.data
})

const Songs2RecordContainer = connect({
    mapStateToProps
})(Songs2RecordComponent)



export default Songs2RecordContainer