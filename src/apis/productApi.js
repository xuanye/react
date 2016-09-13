import http from "./client";
import { REQUEST_URL } from "./constants";

export function queryListApi(callback) {


    setTimeout(function() {
        callback(null,
            [
                { id:1,name:"iPhone 7"},
                { id:2,name:"iPhone 7 Plus"},
                { id:3,name:"Apple Watch 2"},
                { id:4,name:"MacBook Pro 2016"}
            ]
        )
    }, 2000);

    //真实的情况应该是需要调用服务端数据
    //http.postJson(REQUEST_URL.Apply.queryListUrl, {}, json => callback(null, json), error => callback(error));
};
