import React from "react";

export default class Chat extends React.Component{
    render(){
        const h = document.documentElement.clientHeight;

        return(
            <div className="container">

                <div className="flex-left top-gap">
                    <div className="unit site-box">
                        <input type="search" style={{width:"100%"}} placeholder="请输入内容"/>
                    </div>
                    <div className="unit-0" style={{width:"120px"}}>按钮</div>
                </div>
            </div>

        );
    }
}
