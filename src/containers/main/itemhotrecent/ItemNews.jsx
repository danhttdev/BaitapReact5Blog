import React, { Component } from 'react';
import ItemComment from '../../../components/ItemComment';
import { connect } from "react-redux";
import {
    at_news_toggle_like,
    atx_news_delete,
    atx_news_like,
    atx_news_unlike,
    at_news_unlike,
    at_news_like
} from '../../../actions/actionNews';
import ItemLike from '../../../components/ItemLike';
import { Link } from 'react-router-dom'
import FormItemPostComment from '../../../components/FormItemPostComment';
import { sortDate, getDate } from '../../../function'

const uuid = require('uuid');

class ItemNews extends Component {
    constructor(props){
        super(props);
        this.state = {
            isCommentClick: false,
            isNumLikesClick:false,
            isLike: false,
        }

         //////////////////////////////////////////////////////////////
        //  this.props.arrLikes.forEach(element => {
        //     if (element.iduser === this.props.idlogin)
        //         // this.setState({
        //         //     isLike: true
        //         // })
        //         this.state.isLike=true;
        //     });
        
          //////////////////////////////////////////////////////////////
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
        if ( this.props.islogin){
            
            if (this.state.isLike){
                const a= this.props.arrLikes.filter((item) => {
                    if (item.iduser === this.props.userlogin.id) return true;
                    return false;
                })[0];
                const cb = (e) => {
                    this.setState({
                        isLike: !this.state.isLike
                    }); 
                    this.props.at_news_unlike(e); 
                }
                const unlike = { idnewsForUnlike: a.idlike , idnews:a.idnews};
                this.props.atx_news_unlike(unlike, cb);
            }
            else {
                const cb = (e) => {
                    this.setState({
                        isLike: !this.state.isLike
                    });  
                    this.props.at_news_like(e);
                }
                const like = {idnewsForLike:this.props.idNews, iduser:this.props.userlogin.id, date:getDate(), fullname: this.props.userlogin?this.props.userlogin.fullname:''};
                this.props.atx_news_like(like, cb);
            }
        }
        else {
            alert("Vui long dang nhap");
        }
    }
    onCancelComment = () => {
        this.setState({
            isCommentClick: false
        });
    }

     //////////////////////////////////////////////////////////////
    componentWillMount(){
        this.props.arrLikes.forEach(element => {
            if (element.iduser === this.props.idlogin){
                this.setState({
                    isLike:true
                })
            }
        });
        //////////////////////////////////////////////////////////////
    }
    onDelete = () => {
        console.log("delete");
        console.log({idDelete:this.props.idNews});
        this.props.atx_news_delete({idDelete:this.props.idNews});
    }

    render() {
        let cmt = "";
        let edt = "";
        let numLikesClick='';
        if ( this.state.isCommentClick ) {
            edt =   <div className="thumbnail">
                        <FormItemPostComment idNews={this.props.idNews} iduser={this.props.userlogin?this.props.userlogin.id:''}/>
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
            <div className="thumbnail row2">
                <div className="caption">
                    <h3 className='pheader2'><Link to={'/fullnews/'+this.props.idNews} >{ this.props.title }</Link></h3>
                    
                    <p className="text-muted">
                        <Link className="detail" to={'/contact/'+this.props.iduser} >{ this.props.fullname }</Link>
                        <span className="detail"> đã đăng vào </span>
                        <i className="detail">{ this.props.date }  
                        </i>
                    </p>
                    <p>
                    { this.props.content.length>250?this.props.content.substring(0,250).concat('......'):this.props.content }
                    </p>
                    <button className="btn btn-default " ><Link to={'/fullnews/'+this.props.idNews} >Xem thêm </Link></button>
                    <hr/>
                    
                    <p>
                        {/* <a  className={ this.state.isLike?"btn btnliked":"btn btnlike"} onClick={ this.onClickLike}> </a> */}
                        <i className="fa fa-thumbs-o-up fa1 faa-vertical animated" ></i>
                        <b /*onClick={ this.onNumLikesClick }*/ className='btn-num-like'> { this.props.likes } </b>
                        {
                            this.props.idlogin===this.props.iduser?<a  className="btndelete" onClick={this.onDelete}>X</a>:''
                        }
                        {
                            this.props.idlogin===this.props.iduser?<span className="btnedit" onClick={this.onEdit}><Link to={'/edit/'+this.props.idNews}>..</Link></span>:''
                        }
                        {/* <a  className="btn btncomment" onClick={ this.onClickComment }> </a> */}
                        <i className="fa fa-commenting-o  faa-vertical animated"> </i> 
                        <b> { this.props.comments }</b>
                        <span> </span>
                        <i className="fa fa-spinner fa-spin" > </i> 
                        <b>{this.props.views}</b> lượt xem
                    </p>
                </div>
                { numLikesClick }
                { edt }
                { cmt }
            </div>
        );
    }
}

function MapStateToProps(state){
    return {
        idlogin: state.reducerAccount.userlogin?state.reducerAccount.userlogin.id:null,
        userlogin: state.reducerAccount.userlogin,
        islogin: state.reducerAccount.isLogin,

    }
}

const MapDispatchToProps = {
    at_news_toggle_like,
    atx_news_delete,
    atx_news_like,
    atx_news_unlike,
    at_news_unlike,
    at_news_like
}
export default connect(MapStateToProps, MapDispatchToProps)(ItemNews);