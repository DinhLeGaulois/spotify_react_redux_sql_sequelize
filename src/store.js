import { applyMiddleware, createStore, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { reducer as reduxFormReducer } from 'redux-form'

import fromBackEndReducer from './reducers/mySpotify/fromBackEndReducer'
import menuReducer from './reducers/mySpotify/menuReducer'
import toBackEndReducer from './reducers/mySpotify/toBackEndReducer'

const middleware = applyMiddleware(promise(), thunk, logger());

export default createStore(combineReducers({
    menu: menuReducer,
    toBE: toBackEndReducer,
    fromBE: fromBackEndReducer,

    form: reduxFormReducer // mounted under "form"
}), middleware);