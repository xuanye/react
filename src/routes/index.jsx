import React from "react";
import { Route, IndexRedirect, Link } from "react-router";

import Layout from "../pages/layout";

export default (store) => (
    <Route path="/" component= { Layout } >
        <IndexRedirect to="/" />
    </Route>
)
