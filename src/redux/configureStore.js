﻿
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";
import { routerMiddleware } from "react-router-redux";


export default function configureStore(initialState = {}, history) {


    let middleware = applyMiddleware(thunk, routerMiddleware(history));


    if (__DEBUG__ && window.devToolsExtension) {
        // Compose final middleware and use devtools in debug environment
        middleware = compose(middleware, window.devToolsExtension());
    }


    // Create final store and subscribe router in debug env ie. for devtools
    const store = middleware(createStore)(rootReducer, initialState);

    if (module.hot) {
        module.hot.accept("./reducer", () => {
            const nextRootReducer = require("./reducer").default;
            store.replaceReducer(nextRootReducer);
        });

    }
    return store;
}





