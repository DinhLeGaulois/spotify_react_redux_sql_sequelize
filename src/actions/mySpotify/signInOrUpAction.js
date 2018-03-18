import axios from "axios"

import cst from '../../constants/mySpotify/cst'

const signInOrUpAction = {
    signInOrUp: (data) => {
        return (dispatch) => {
            if (data.nameSignUp == undefined && data.emailSignUp == undefined) {
                let user = {
                    username: data.nameSignIn,
                    email: data.emailSignIn
                }
                axios.post('/api/myspotify/signin', user)
                    .then(data => {
                        if (typeof (Storage) !== "undefined") {
                            localStorage.setItem("userId", data.data.id);
                            dispatch({ type: cst.MAIN_UI_LOGIN_SUCCESS })
                        } else { alert("Sorry! No Web Storage support.") }
                    })
            }
            else if (data.nameSignIn == undefined && data.emailSignIn == undefined) {
                let user = {
                    username: data.nameSignUp,
                    email: data.emailSignUp
                }
                axios.post('/api/myspotify/signup', user)
                    .then(data => {
                        console.log("Actions, signup, data: " + JSON.stringify(data, null, 5))
                        if (typeof (Storage) !== "undefined") {
                            localStorage.setItem("userId", data.data.id);
                            dispatch({ type: cst.MAIN_UI_LOGIN_SUCCESS })
                        } else { alert("Sorry! No Web Storage support.") }
                    })
            }
        }
    },

    signOut: () => { return (dispatch) => { dispatch({ type: cst.MAIN_UI_LOGOUT }) } },

    setAdd: () => { return (dispatch) => { dispatch({ type: cst.MAIN_UI_ADD }) } },

    setDisplay: () => { return (dispatch) => { dispatch({ type: cst.MAIN_UI_DISPLAY }) } },
}

export default signInOrUpAction