import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getDate } from '../function';
import { atx_news_add_comment } from '../actions/actionNews';
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
        const cb = (e) => {
        }
        if (comment.iduser !== undefined  && comment.iduser !== '') this.props.atx_news_add_comment(comment,cb);
        else {
            alert("Vui long dang nhap");
        }
    }
    // componentWillMount(){
    //     // at_account_login
    //     console.log(JSON.parse(localStorage.getItem('account')));
    //     this.props.at_account_login(JSON.parse(localStorage.getItem('account')));
    // }
    render() {
        return (
            <div>
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

// // export default connect(MapStateToProps, null)(Home);

const MapDispatchToProps = {
    atx_news_add_comment,
    at_account_login
}

export default connect(MapStateToProps, MapDispatchToProps)(FormItemPostComment);