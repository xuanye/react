import { combineReducers } from "redux";
import { routerReducer as router } from "react-router-redux";

import commonReducer from "MODULES/common";
import productReducer from "MODULES/products";

export default combineReducers({
    router,
    common:commonReducer,
    product:productReducer
})
