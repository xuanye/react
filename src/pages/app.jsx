import React from "react";
import ReactDOM from "react-dom";


import { Provider } from "react-redux";
import { Router, hashHistory } from "react-router";
import { syncHistoryWithStore, routerReducer } from "react-router-redux";

import makeRoutes from "../routes";

import "../static/app.css";
import configureStore from "../redux/configureStore";

import Root from "../containers/root";

const initialState = window.___INITIAL_STATE__;

//const store = createStore(initialState)

const store = configureStore(initialState, hashHistory);

<<<<<<< HEAD
=======

>>>>>>> ff03dfe3eef472ca0c21551c390ca845d3caaff9
// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(hashHistory, store,{
    selectLocationState: (state) => state.router
});

const routes = makeRoutes(store);

<<<<<<< HEAD
console.log(store);
=======
>>>>>>> ff03dfe3eef472ca0c21551c390ca845d3caaff9
ReactDOM.render(
    <Provider store={store}>
        <Root history={history} routes={routes} store={store} />
    </Provider>,
    document.getElementById('appMountNode')
);

