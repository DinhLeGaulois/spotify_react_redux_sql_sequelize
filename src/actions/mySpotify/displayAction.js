import axios from "axios"

import cst from '../../constants/mySpotify/cst'

import extractDat from '../../common/mySpotify/dataExtraction'

const displayActions = {
    mySpotifyAPlaylistChosen: (data) => {
        return dispatch => 
            dipatch({
                type: cst.MY_SPOTIFY_A_PLAYLIST_SELECTED,
                payload: data.playlistId
            })
    },

    mySpotifyGetArtist: (name) => {
        return (dispatch) => {
            axios.get('/api/myspotify/search/track/' + name)
                .then(data => {
                    let obj = extractData(data.data)
                    //LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
                    console.log("actions/mySpotifyGetArtist, data: " + JSON.stringify(obj, null, 5))

                    axios.get('/api/myspotify/get/playlist/' + obj.userId)
                        .then(data => {
                            dispatch({
                                type: cst.MY_SPOTIFY_SELECTBY_SONG_BY_NAME,
                                payload: obj.data
                            })
                            dispatch({
                                type: cst.MY_SPOTIFY_GET_PLAYLIST,
                                payload: data.data
                            })
                            //LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
                            console.log("actions/get/playlist, data: " + JSON.stringify(data, null, 5))
                        })
                    // axios.post('/api/myspotify/add', obj)
                    //     .then(data => {
                    //         // dispatch({ type: cst.MY_SPOTIFY_SHOW_UI })
                    //     })

                })
        }
    },

    

    //#######################################
    //################# add #################
    //#######################################
    // addr: (data) => {
    //     return dispatch => {
    //         axios.post('/api/myspotify/add', data)
    //             .then(response => {
    //                 dispatch({ type: cst.MY_SPOTIFY_ADD })
    //             })
    //     }
    // },

    // addUser: (data) => {
    //     return dispatch => {
    //         axios.post('/api/myspotify/add/user', data)
    //             .then(response => {
    //                 localStorage.setItem("userId", response.data.id)
    //                 dispatch({ type: cst.MY_SPOTIFY_ADD_USER })
    //             })
    //     }
    // },

    // addPlaylist: (data) => {
    //     return dispatch => {
    //         let oPlaylist = {
    //             name: data.name,
    //             tags: data.tags == undefined ? "" : data.tags,
    //             userId: localStorage.getItem("userId")
    //         }
    //         axios.post('/api/myspotify/add/playlist', oPlaylist)
    //             .then(response => {
    //                 dispatch({ type: cst.MY_SPOTIFY_ADD_PLAYLIST })
    //             })
    //     }
    // },

    // addSong: (data) => {
    //     return dispatch => {
    //         let oSong = {
    //             title: data.title,
    //             description: data.description,
    //         }
    //         axios.post('/api/myspotify/add/song', aSong)
    //             .then(response => {
    //                 dispatch({ type: cst.MY_SPOTIFY_ADD_SONG })
    //             })
    //     }
    // },

    // addAlbum: (data) => {
    //     return dispatch => {
    //         let oAlbum = {
    //             year: data.year,
    //             genre: data.genre,
    //             title: data.title,
    //             format: data.format
    //         }
    //         axios.post('/api/myspotify/add/album', oAlbum)
    //             .then(response => {
    //                 dispatch({ type: cst.MY_SPOTIFY_ADD_ALBUM })
    //             })
    //     }
    // },

    // addArtist: (data) => {
    //     return dispatch => {
    //         let oArtist = {
    //             name: data.name,
    //             country: data.country == undefined ? "" : data.country,
    //             style: data.style == undefined ? "" : data.style
    //         }
    //         axios.post('/api/myspotify/add/playlist', oArtist)
    //             .then(response => {
    //                 dispatch({ type: cst.MY_SPOTIFY_ADD_ARTIST })
    //             })
    //     }
    // },

    // addPlayist_song: (data) => {
    //     return dispatch => {
    //         let oPlaylistSong = {
    //             playlistId: data.playlistId,
    //             songId: data.songId
    //         }
    //         axios.post('/api/myspotify/add/playlist_song', oPlaylistSong)
    //             .then(response => {
    //                 dispatch({ type: cst.MY_SPOTIFY_ADD_PLAYLIST_SONG })
    //             })
    //     }
    // },

    // addAlbum_song: (data) => {
    //     return dispatch => {
    //         let oAlbumSong = {
    //             albumId: data.albumId,
    //             songId: data.songId
    //         }
    //         axios.post('/api/myspotify/add/album_song', oAlbumSong)
    //             .then(response => {
    //                 dispatch({ type: cst.MY_SPOTIFY_ADD_ALBUM_SONG })
    //             })
    //     }
    // },

    // addAlbum_artist: (data) => {
    //     return dispatch => {
    //         let oAlbumArtist = {
    //             albumId: data.albumId,
    //             artistId: data.artistId
    //         }
    //         axios.post('/api/myspotify/add/album_artist', oAlbumArtist)
    //             .then(response => {
    //                 dispatch({ type: cst.MY_SPOTIFY_ADD_ALBUM_ARTIST })
    //             })
    //     }
    // },

    // //#################################################### 
    // //################# ALBUM: SELECT BY #################
    // //####################################################
    // selectAlbum: (data) => {
    //     return dispatch => {

    //     }
    // },

    // selectAlbumId: (data) => {
    //     return dispatch => {

    //     }
    // },

    // selectAlbumYear: (data) => {
    //     return dispatch => {

    //     }
    // },

    // selectAlbumGenre: (data) => {
    //     return dispatch => {

    //     }
    // },

    // selectAlbumTitle: (data) => {
    //     return dispatch => {

    //     }
    // },
    // //##################################################### 
    // //################# ARTIST: SELECT BY #################
    // //#####################################################
    // selectArtist: (data) => {
    //     return dispatch => {

    //     }
    // },

    // selectArtistId: (data) => {
    //     return dispatch => {

    //     }
    // },

    // selectArtistStyle: (data) => {
    //     return dispatch => {

    //     }
    // },
    // //##################################################### 
    // //################# SONG: SELECT BY #################
    // //#####################################################    
    // selectSongTitle: (data) => {
    //     return dispatch => {

    //     }
    // },

    // selectSongId: (data) => {
    //     return dispatch => {

    //     }
    // }
}

export default displayActions