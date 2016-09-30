import React from "react";
import { Route, IndexRedirect, Link } from "react-router";

import Layout from "../pages/layout";


export default (store) => (
    <Route path="/" component= { Layout } >
        <IndexRedirect to="/product/list" />
        <Route path="/product/list" getComponent={(nextState,cb)=>{
            require.ensure([], (require) => {
                cb(null, require('PAGES/product/index').ProductList)
            }, 'productlist')
        }}/>
        <Route path="/product/detail" getComponent={(nextState,cb)=>{
            require.ensure([], (require) => {
                cb(null, require('PAGES/product/detail').default)
            }, 'productdetail')
        }}/>
        <Route path="/chat" getComponent={(nextState,cb)=>{
            require.ensure([], (require) => {
                cb(null, require('PAGES/chat/index').default)
            }, 'chat')
        }}/>
    </Route>
)
