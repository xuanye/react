﻿import React from "react"
import { Router } from "react-router";
import DevTools from "./devTools";
import createDevToolsWindow from "../redux/utils/createDevToolsWindow";

export default class Root extends React.Component {

    get devTools() {

            if (__DEBUG_NEW_WINDOW__) {
                if (!window.devToolsExtension) {
                    return createDevToolsWindow(this.props.store);
                } else {
                    return window.devToolsExtension.open();
                }
            }
            else{
                if (!window.devToolsExtension) {
                    return (<DevTools />);
                }
                return null;
            }
    }

    render() {

        return (
            <div>
                <div>abc</div>
                <Router history={this.props.history} routes={this.props.routes} />
                {this.devTools}
            </div>
        );
    }
}

