import cst from '../../constants/mySpotify/cst'

const initialStates = {
    data: [],
    dataSelectedMode: "",
    playlistListing: [],
    selectedPlaylist: "", // playlistId
    previousOp: "",
    activeOp: ""
}

const fromBackEndReducer = (state = initialStates, action) => {
    switch (action.type) {
        case cst.MAIN_UI_ADD: {
            return Object.assign({}, state, {
                mainUIStatus: cst.MAIN_UI_ADD
            })
        }
        case cst.MAIN_UI_LOGIN: {
            return Object.assign({}, state, {
                mainUIStatus: cst.MAIN_UI_LOGIN
            })
        }
        case cst.MAIN_UI_LOGOUT: {
            return Object.assign({}, state, {
                mainUIStatus: cst.MAIN_UI_LOGOUT
            })
        }
        case cst.MAIN_UI_DISPLAY: {
            return Object.assign({}, state, {
                mainUIStatus: cst.MAIN_UI_DISPLAY
            })
        }
        //OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
        case cst.UI_ADD_NEW_PLAYLIST: {
            return Object.assign({}, state, {
                activePlaylist: action.payload,
                data: [], // new playlist --> no data
                playlistListing: state.playlistListing.push(action.payload),
                mainUIStatus: cst.MAIN_UI_DISPLAY
            })
        }
        case cst.UI_ADD_SELECT_A_PLAYLIST: {
            return Object.assign({}, state, {
                activePlaylist: state.playlistListing.filter(a => a.id == action.payload.id ? a : null),
                data: action.payload.data,
                activeOp: state.previousOp
            })
        }
        case cst.UI_ADD_SELECTED_SONGS: {
            return Object.assign({}, state, {
                currentOp: cst.UI_ADD_SELECTED_SONGS
            })
        }
        case cst.UI_ADD_SONGS: {
            return Object.assign({}, state, {
                currentOp: cst.UI_ADD_SONGS
            })
        }
        case cst.UI_SAVE_ALL: {
            return Object.assign({}, state, {
                currentOp: cst.UI_SAVE_ALL
            })
        }
        //OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
        case cst.UI_DISPLAY_BY_ALBUM_ID: {
            return Object.assign({}, state, {
                currentOp: cst.UI_DISPLAY_BY_ALBUM_ID
            })
        }
        case cst.UI_DISPLAY_BY_ALBUM_NAME: {
            return Object.assign({}, state, {
                currentOp: cst.UI_DISPLAY_BY_ALBUM_NAME
            })
        }
        case cst.UI_DISPLAY_BY_ALBUM_TYPE: {
            return Object.assign({}, state, {
                currentOp: cst.UI_DISPLAY_BY_ALBUM_TYPE
            })
        }
        case cst.UI_DISPLAY_BY_ARTIST_ID: {
            return Object.assign({}, state, {
                currentOp: cst.UI_DISPLAY_BY_ARTIST_ID
            })
        }
        case cst.UI_DISPLAY_BY_ARTIST_NAME: {
            return Object.assign({}, state, {
                currentOp: cst.UI_DISPLAY_BY_ARTIST_NAME
            })
        }
        case cst.UI_DISPLAY_BY_ARTIST_TYPE: {
            return Object.assign({}, state, {
                currentOp: cst.UI_DISPLAY_BY_ARTIST_TYPE
            })
        }
        case cst.UI_DISPLAY_BY_SONG_BY_NAME: {
            return Object.assign({}, state, {
                currentOp: cst.UI_DISPLAY_BY_SONG_BY_NAME
            })
        }
    }
    return state
}

export default fromBackEndReducer