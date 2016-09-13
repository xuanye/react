import { combineReducers } from "redux";
import { routerReducer as router } from "react-router-redux";

import productReducer from "./modules/products";

export default combineReducers({
    router,
    product:productReducer
})
