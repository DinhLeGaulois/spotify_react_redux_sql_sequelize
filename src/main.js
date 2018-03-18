import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./store";

import MainUIContainer from './containers/mySpotify/MainUIContainer'
ReactDOM.render(
    <Provider store={store}>
        <MainUIContainer />
    </Provider>,
    document.getElementById('app')
);