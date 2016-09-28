
import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";



import {queryList,itemAdd} from "MODULES/products";

class List extends React.Component{
    componentWillMount(){
        this.props.queryList();
    }
    addProduct(){
        const id =this.props.data.length-3;
        const name = `自定义商品${id}`;
        this.props.itemAdd({id,name});
    }
    render(){
        const loading = this.props.isFetching?(<i>正在加载...</i>):null;
        return (
            <div>
                <div> 商品列表 </div>
                <ul>{
                    this.props.data.map(function(item,i){
                        return (<li key={i}>{item.name}</li>);
                    })
                }
                </ul>
                <button onClick={(e)=>this.addProduct()}>添加商品</button>
                { loading }
            </div>
        )
    }
}
const mapStateToProps =  state =>{
    return {
        isFetching: state.common.isFetching,
        data:state.product.data
    }
}
export default connect(mapStateToProps,{queryList,itemAdd})(List);

