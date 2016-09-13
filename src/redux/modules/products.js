
import { createAction, handleActions } from "redux-actions";

//使用公告的服务
import { requestError } from "./common";

//调用服务端接口
import { queryListApi } from "../../apis/productApi";


// ------------------------------------
// Action Type
// ------------------------------------
export const QUERY_LIST = "myapp/test/querylist";
export const LIST_LOADED = "myapp/test/listloaded";


// ------------------------------------
// Actions Creator
// ------------------------------------

// 需要同步处理的Action

// 内部不需要公开的action
const queryListStart = createAction(QUERY_LIST);
const listLoaded = createAction(LIST_LOADED);



// 异步 Action creators: 使用 redux-thunk.
export function queryList() {
    return (dispatch, getState) => {
        if (shouldFetchList(getState())) {
            dispatch(queryListStart());
            queryListApi((error, data) => {
                if (error) {
                    dispatch(requestError(error));
                }
                else {
                    dispatch(listLoaded(data));
                }
            });
        }

    }
}

function shouldFetchList(state){
    const isloading = state.product.isloading;
    return !isloading && state.product.data.length===0;
}


// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
    isloading: false,
    data: []
};

const reducer = handleActions({
    [QUERY_LIST]: (state, action) => {
        return Object.assign({}, state, { isloading: true });
    },
    [LIST_LOADED]: (state, action) => {
        return Object.assign({}, state, { isloading: false, data: action.payload });
    }
}, initialState);

export default reducer;


