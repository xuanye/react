import { createAction, handleActions } from "../reduxActions";

//使用公告的服务
import { requestError,requestStart,requestEnd } from "./common";

//调用服务端接口
import productService from "SERVICES/productService";


// ------------------------------------
// Action Type
// ------------------------------------
export const LIST_LOADED = "myapp/product/listloaded";

export const ITEM_ADD = "myapp/product/itemadd";

// ------------------------------------
// Actions Creator
// ------------------------------------

// 需要同步处理的Action

// 内部不需要公开的action
const listLoaded = createAction(LIST_LOADED);

export const itemAdd = createAction(ITEM_ADD);


// 异步 Action creators: 使用 redux-thunk.
export function queryList() {
    return (dispatch, getState) => {
        if (shouldFetchList(getState())) {
            dispatch(requestStart());
            productService.queryList((error, data) => {
                if (error) {
                    dispatch(requestError(error));
                }
                else {
                    dispatch(requestEnd());
                    dispatch(listLoaded(data));
                }
            });
        }

    }
}

function shouldFetchList(state){
    const isFetching = state.common.isFetching;
    return !isFetching && state.product.data.length===0;
}


// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
    data: []
};

const reducer = handleActions({
    [LIST_LOADED]: (state, action) => {
        return Object.assign({}, state, { data: action.payload });
    },
    [ITEM_ADD]: (state, {payload:item}) => {
        return Object.assign({}, state, { data: [...state.data,item] });
    },
}, initialState);

export default reducer;


