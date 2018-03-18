import React from 'react'
import PropTypes from 'prop-types'

import cst from '../../constants/mySpotify/cst'

let AddComponent = ({ currentOp, playlist, onClickGetArtist, setChosenPlaylist }) =>
    <div>
        {currentOp == cst.MY_SPOTIFY_SHOW_UI &&
            <p align='center'><button onClick={() => onClickGetArtist("love")}>Get Artist</button></p>
        }
        {currentOp == cst.MY_SPOTIFY_SELECTBY_SONG_BY_NAME && playlist.length > 0 &&
            <ul>
                playlist.map(a => {
                    <li><button onClick={() => setChosenPlaylist(a.id)}><font color="green"><b><u>{a.name}</u></b></font></button></li>
                })
            </ul>
        }
        {currentOp == cst.MY_SPOTIFY_SELECTBY_SONG_BY_NAME && playlist.length == 0 &&
           <p>Create Form to Insert new Playlist</p>
        }
        <p>Current Operator: {currentOp}</p>
    </div>

const playListShape = {
    id: PropTypes.string,
    name: PropTypes.string,
    userId: PropTypes.string
}


AddComponent.propTypes = {
    currentOp: PropTypes.string,
    playlist: PropTypes.arrayOf(PropTypes.shape(playListShape)),
    onClickGetArtist: PropTypes.func.isRequired,
    setChosenPlaylist: PropTypes.func.isRequired
};

export default AddComponent