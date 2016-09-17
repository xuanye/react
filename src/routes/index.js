import React from "react";
import { Route, IndexRedirect, Link } from "react-router";

import Layout from "../pages/layout";

import {ProductList} from "../pages/product/index";

export default (store) => (
    <Route path="/" component= { Layout } >
        <IndexRedirect to="/product/list" />
        <Route path="/product/list" component={ProductList}/>
    </Route>
)
