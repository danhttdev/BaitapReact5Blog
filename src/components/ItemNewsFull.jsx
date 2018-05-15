import React, { Component } from 'react';

import ItemComment from '../components/ItemComment';
import { connect } from "react-redux";
import {
    // at_news_toggle_like,
    atx_news_delete,
    atx_news_like,
    atx_news_unlike,
    atx_news_views
} from '../actions/actionNews';
import { at_account_login } from '../actions/actionAccount';
import ItemLike from '../components/ItemLike';
import FormItemPostComment from '../components/FormItemPostComment';
import { sortDate, getDate } from '../function'
import { Link } from 'react-router-dom'

const uuid = require('uuid');



class ItemNewsFull extends Component {
    constructor(props){
        super(props);
        this.state = {
            isCommentClick: false,
            isNumLikesClick:false,
            isLike: false,
            arrLikes:[],
            arrComments:[]
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
        if ( this.props.islogin === false ){
            alert(" Vui long dang nhap");
        }
        else {
            
            if (this.state.isLike){
                console.log("unlike");
                const a= this.props.arrLikes.filter((item) => {
                    if (item.iduser == this.props.userlogin.id) return true;
                    return false;
                })[0];
                const unlike = { idnewsForUnlike: a.idlike , idnews:a.idnews};
                const cb = (e) => {
                    console.log(e);
                    this.setState({
                        isLike: !this.state.isLike
                    });  
                }
                this.props.atx_news_unlike(unlike, cb);
            }
            else {
                console.log("like");
                const like = {idnewsForLike:this.props.idNews, iduser:this.props.userlogin.id, date:getDate(), fullname: this.props.userlogin?this.props.userlogin.fullname:''};
                const cb = (e) => {
                    console.log('respond:' );
                    this.setState({
                        isLike: !this.state.isLike
                    });  
                    console.log(e);
                }
                this.props.atx_news_like(like, cb);
            }
            // this.setState({
            //     isLike: !this.state.isLike
            // });       
        }
       
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
        this.setState({
            arrComments: this.props.arrComments,
            arrLikes: this.props.arrLikes
        })


       


    }
    onDelete = () => {
        this.props.atx_news_delete({idDelete:this.props.idNews});
        this.props.history.push('/');
    }
    onEdit = () => {
    }
    fullNews = () => {
    }
    // doan nay lam isLogin bi true;
    // componentWillMount(){
    //     console.log(JSON.parse(localStorage.getItem('account')));
    //     //this.props.at_account_login(JSON.parse(localStorage.getItem('account')));
    // }
    render() {
     

        let cmt = "";
        let edt = "";
        let numLikesClick='';
        if ( this.state.isCommentClick ) {
            edt =   <div className="thumbnail">
                        {/* <textarea className="form-control comment" rows="2"></textarea>
                        <a className="btn btn-default">Bình luận</a> */}
                        <FormItemPostComment idNews={this.props.idNews} iduser={this.props.userlogin?this.props.userlogin.id:''} />
                        <a className="btn btn-default btn-cancel-cmt" onClick={this.onCancelComment}>Hủy</a>
                    </div>
            cmt=this.props.arrComments.sort(
                sortDate
            ).map(
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
                            <h3 className='pheader'>{ this.props.title }</h3>
                            <b className="detail">{ this.props.fullname }</b><span className="detail"> đã đăng vào </span><i className="detail">{ this.props.date } có <b> {this.props.views} </b>lượt xem</i>
                            <p className='full-news'>
                            { this.props.content }
                            </p>
                            <hr/>
                            <p>
                                <a  className={ this.state.isLike?"btn btnliked":"btn btnlike"} onClick={ this.onClickLike}> </a>
                                <b onClick={ this.onNumLikesClick } className='btn-num-like'> { this.props.likes } </b>
                                {
                                    this.props.idlogin===this.props.iduser?<a  className="btndelete" onClick={this.onDelete}>X</a>:''
                                }
                                {/* {
                                    this.props.idlogin===this.props.iduser?<a  className="btnedit" onClick={this.onEdit}>..</a>:''
                                } */}
                                {
                                    this.props.idlogin===this.props.iduser?<Link to={'/edit/'+this.props.idNews} className="btnedit" >..</Link>:''
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
        userlogin: state.reducerAccount.userlogin,
        islogin: state.reducerAccount.isLogin
    }
}

const MapDispatchToProps = {
    // at_news_toggle_like,
    atx_news_delete,
    at_account_login,
    atx_news_like,
    atx_news_unlike,
    atx_news_views
}
export default connect(MapStateToProps, MapDispatchToProps)(ItemNewsFull);