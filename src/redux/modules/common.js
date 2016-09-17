
import { createAction, handleActions } from "redux-actions";


// ------------------------------------
// Action Type
// ------------------------------------
export const REQUEST_ERROR = "myapp/common/requesterror";
export const REQUEST_START = "myapp/common/requeststart";
export const REQUEST_END = "myapp/common/requestend";


// ------------------------------------
// Actions Creator
// ------------------------------------

// 需要同步处理的Action
export const requestError = createAction(REQUEST_ERROR);
export const requestStart = createAction(REQUEST_START);
export const requestEnd = createAction(REQUEST_END);

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
    isFetching:false
};

const reducer = handleActions({
    [REQUEST_ERROR]: (state, action) => {
        return Object.assign({}, state, { error: action.payload,isFetching: false });
    },
    [REQUEST_START]:(state,action) => {
        return Object.assign({}, state, { isFetching: true });
    },
    [REQUEST_END]:(state,action) => {
        return Object.assign({}, state, { isFetching: false });
    }
}, initialState);

export default reducer;


