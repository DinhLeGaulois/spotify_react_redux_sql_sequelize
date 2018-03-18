import React from 'react'
import { connect } from 'react-redux'

import addAction from '../../actions/mySpotify/addAction'

import AddComponent from '../../components/mySpotify/AddComponent'

const mapStateToProps = (state) => ({
    currentOp: state.mySpotify.currentOp,
    playlist: state.mySpotify.playlist
})

const mapDispatchToProps = (dispatch) => ({
    onClickGetArtist: (data) => {dispatch(mySpotifyAction.mySpotifyGetArtist(data))},
    setChosenPlaylist: (data) => {dispatch(mySpotifyAction.mySpotifyAPlaylistChosen(data))}
})

// You have to connect() to any reducers that you wish to connect to yourself
const AddContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddComponent)

export default AddContainer