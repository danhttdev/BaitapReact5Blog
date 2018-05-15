import React, { Component } from 'react';

import ItemComment from '../components/ItemComment';
import { connect } from "react-redux";
import {
    at_news_toggle_like,
    atx_news_delete
} from '../actions/actionNews';
import ItemLike from '../components/ItemLike';
import FormItemPostComment from '../components/FormItemPostComment';
const uuid = require('uuid');



class ItemNewsFull extends Component {
    constructor(props){
        super(props);
        this.state = {
            isCommentClick: false,
            isNumLikesClick:false,
            isLike: false,
        }
    }
    onClickComment = () => {
        this.setState({
            isCommentClick: !this.state.isCommentClick
        });
    }
    onNumLikesClick = () => {
        this.setState({
            isNumLikesClick: !this.state.isNumLikesClick
        });
    }
    onClickLike = () => {
        this.setState({
            isLike: !this.state.isLike
        });        
    }
    onCancelComment = () => {
        this.setState({
            isCommentClick: false
        });
    }
    componentWillMount(){
        this.props.arrLikes.forEach(element => {
            if (element.iduser === this.props.idlogin){
                this.setState({
                    isLike:true
                })
            }
        });
    }
    onDelete = () => {
        console.log("delete");
        console.log(this.props.idNews);
        this.props.atx_news_delete({idDelete:this.props.idNews});
        this.props.history.push('/');
    }
    onEdit = () => {
        console.log("edit");
    }
    fullNews = () => {
        console.log('xem them');
    }
    render() {
        let cmt = "";
        let edt = "";
        let numLikesClick='';
        if ( this.state.isCommentClick ) {
            edt =   <div className="thumbnail">
                        {/* <textarea className="form-control comment" rows="2"></textarea>
                        <a className="btn btn-default">Bình luận</a> */}
                        <FormItemPostComment idNews={this.props.idNews} iduser={this.props.userlogin.id} onCommentComplete={this.onClickComment}/>
                        <a className="btn btn-default btn-cancel-cmt" onClick={this.onCancelComment}>Hủy</a>
                    </div>
            cmt=this.props.arrComments.map(
                (item) =>  <ItemComment 
                            key={uuid()}
                            username={ item.fullname }
                            content={ item.content }
                            date= { item.date }/>
            )
        }
        if ( this.state.isNumLikesClick ) {
            numLikesClick=this.props.arrLikes.map(
                (item) =>  <ItemLike 
                            key={uuid()}
                            username={ item.fullname }
                            date= { item.date }/>
            )
        }

        return (
            <div className="row ">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                    <div className="thumbnail row2">
                        <div className="caption">
                            <h3>{ this.props.title }</h3>
                            <b className="detail">{ this.props.fullname }</b><span className="detail"> đã đăng vào </span><i className="detail">{ this.props.date } có {this.props.views} lượt xem</i>
                            <p>
                            { this.props.content }
                            </p>
                            <hr/>
                            <p>
                                <a  className={ this.state.isLike?"btn btnliked":"btn btnlike"} onClick={ this.onClickLike}> </a>
                                <b onClick={ this.onNumLikesClick } className='btn-num-like'> { this.props.likes } </b>
                                {
                                    this.props.idlogin===this.props.iduser?<a  className="btndelete" onClick={this.onDelete}>X</a>:''
                                }
                                {
                                    this.props.idlogin===this.props.iduser?<a  className="btnedit" onClick={this.onEdit}>..</a>:''
                                }
                                <a  className="btn btncomment" onClick={ this.onClickComment }> </a>
                                <b>{ this.props.comments }</b>
                            </p>
                        </div>
                        { numLikesClick }
                        { edt }
                        { cmt }
                    </div>
                </div>
            </div>
        );
    }
}

function MapStateToProps(state){
    return {
        idlogin: state.reducerAccount.userlogin?state.reducerAccount.userlogin.id:null,
        userlogin: state.reducerAccount.userlogin
    }
}

const MapDispatchToProps = {
    at_news_toggle_like,
    atx_news_delete
}
export default connect(MapStateToProps, MapDispatchToProps)(ItemNewsFull);