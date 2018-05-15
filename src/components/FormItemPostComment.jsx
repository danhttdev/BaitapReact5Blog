import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getDate } from '../function';
import { atx_news_add_comment } from '../actions/actionNews';
class FormItemPostComment extends Component {
    constructor(props){
        super(props);
        this.state = {
            content:''
        }
    }
    onChange = (e) => {
        this.setState({
            content: e.target.value
        });
    }
    onComment = () => {
        const comment = {idNewsComment:this.props.idNews,iduser:this.props.iduser,content:this.state.content,date:getDate()};
        console.log("iduser:");
        console.log(comment.iduser);
        const cb = (e) => {
            console.log(e);
            this.props.onCommentComplete();
        }
        if (comment.iduser !== undefined ) this.props.atx_news_add_comment(comment,cb);
        else {
            alert("Vui long dang nhap");
        }
    }
    render() {
        return (
            <div>
                <textarea 
                    className="form-control comment" 
                    rows="2"
                    name="content"
                    value={this.state.content}
                    onChange={this.onChange}
                ></textarea>
                <a className="btn btn-default" onClick={this.onComment}>Bình luận</a>
            </div>
        );
    }
}

// function MapStateToProps(state){
//   return {
//       isLogin: state.reducerAccount.isLogin?true:false,
//   }
// }

// // export default connect(MapStateToProps, null)(Home);

const MapDispatchToProps = {
    atx_news_add_comment
}

export default connect(null, MapDispatchToProps)(FormItemPostComment);