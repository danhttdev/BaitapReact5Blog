import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getDate } from '../function';
import { 
    atx_news_add_comment,
} from '../actions/actionNews';
import { at_account_login } from '../actions/actionAccount';
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
        const comment = {idNewsComment:this.props.idNews,iduser:this.props.iduser,content:this.state.content,date:getDate(), fullname: this.props.userlogin?this.props.userlogin.fullname:''};
        
        if (comment.iduser !== undefined  && comment.iduser !== '') {
            if (this.state.content !== ""){
                const cb = (e) => {
                }
                this.props.atx_news_add_comment(comment,cb);
            }else {
                alert("Chưa nhập gì cả");
            }
            
        }
        else {
            alert("Vui long dang nhap");
        }
    }
    render() {
        return (
            <div className='postcomment'>
                <textarea 
                    autoFocus
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

function MapStateToProps(state){
    return {
        userlogin: state.reducerAccount.userlogin
    }
}

const MapDispatchToProps = {
    atx_news_add_comment,
    at_account_login,
}

export default connect(MapStateToProps, MapDispatchToProps)(FormItemPostComment);