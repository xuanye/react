
import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";



import {queryList} from "../../redux/modules/products";

class List extends React.Component{
    componentWillMount(){
        this.props.queryList();
    }
    render(){
        const loading = this.props.isFetching?(<i>正在加载...</i>):null;
        return (
            <div>
                <div> 商品列表12 </div>
                <ul>{
                    this.props.data.map(function(item,i){
                        return (<li key={i}>{item.name}</li>);
                    })
                }
                </ul>
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
export default connect(mapStateToProps,{queryList})(List);

