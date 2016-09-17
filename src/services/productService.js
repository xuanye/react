import { postJson } from "../utils/client";
import { REQUEST_URL } from "./constants";


export const service= {
    queryList: function(callback){
        const mockdata = [
                        { id:1,name:"iPhone 7"},
                        { id:2,name:"iPhone 7 Plus"},
                        { id:3,name:"Apple Watch 2"},
                        { id:4,name:"MacBook Pro 2016"}
        ];
        setTimeout(()=>{callback(null,mockdata)}, 1000);
        //真实的情况应该是需要调用服务端数据
        //postJson(REQUEST_URL.Apply.queryListUrl, {}, json => callback(null, json), error => callback(error));
    }
};

export default service;
