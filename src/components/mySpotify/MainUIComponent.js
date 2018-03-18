import React from 'react'
import PropTypes from 'prop-types'

import cst from '../../constants/mySpotify/cst'

import AddContainer from '../../containers/mySpotify/AddContainer'
import DisplayContainer from '../../containers/mySpotify/DisplayContainer'
import SignInOrUpContainer from '../../containers/mySpotify/SignInOrUpContainer'

const MainUIComponent = ({ status, setAddUI, setDisplayUI, setSignOut, setSignInOrUp }) =>
    <div className="container">
        <div className="menuBar">
            {status == cst.MAIN_UI_LOGIN_SUCCESS &&
                <button className="menuButton" onClick={() => setSignOut()}>Logout</button>
            }
        </div>

        {status == cst.MAIN_UI_LOGOUT && <SignInOrUpContainer />}
        {status == cst.MAIN_UI_LOGIN_SUCCESS &&
            <p align="center">
                <button onClick={() => setAddUI()}>Add User/Playlist/Songs</button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={() => setDisplayUI()}>Let Play</button>
            </p>
        }
        {status == cst.MAIN_UI_ADD && <AddContainer />}
        {status == cst.MAIN_UI_DISPLAY && <DisplayContainer />}
    </div>

MainUIComponent.propTypes = {
    status: PropTypes.string,

    setAddUI: PropTypes.func.isRequired,
    setDisplayUI: PropTypes.func.isRequired,
    setSignInOrUp: PropTypes.func.isRequired,
    setSignOut: PropTypes.func.isRequired,
};

export default MainUIComponent