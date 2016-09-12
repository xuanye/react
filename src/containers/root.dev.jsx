import React, { Component, PropTypes } from "react"
import { Router } from "react-router";
import DevTools from "./devTools";
import createDevToolsWindow from "../redux/utils/createDevToolsWindow";

export default class Root extends Component {

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
                <Router history={this.props.history} routes={this.props.routes} />
                {this.devTools}
            </div>
        );
    }
}
Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired
}
