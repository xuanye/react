import React from "react";
import {Link} from "react-router";

export default class Layout extends React.Component{
    render(){
        return (<div>
        <div>Hello World1</div>
        {this.props.children}
        </div>);
    }
}
