import cst from '../../constants/mySpotify/cst'

const menuReducer = (state = {
    mainStatus: cst.MAIN_UI_LOGIN
}, action) => {
    switch (action.type) {
        case cst.MAIN_UI_LOGIN:
            return state.mainUIStatus = action.type
        case cst.MAIN_UI_LOGIN_SUCCESS:
            return state.mainUIStatus = action.type
        case cst.MAIN_UI_LOGOUT:
            return state.mainUIStatus = action.type
        case cst.MAIN_UI_ADD:
            return state.mainUIStatus = action.type
        case cst.MAIN_UI_DISPLAY:
            return state.mainUIStatus = action.type
    }
    return state
}

export default menuReducer