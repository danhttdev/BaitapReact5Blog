import React, { Component } from 'react';
import ItemComment from '../../../components/ItemComment';
import { connect } from "react-redux";
import {
    at_news_toggle_like
} from '../../../actions/actionNews';
import ItemLike from '../../../components/ItemLike';

const uuid = require('uuid');

class ItemNews extends Component {
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
    fullNews = () => {
        console.log('xem them');
    }
    render() {
        let cmt = "";
        let edt = "";
        let numLikesClick='';
        if ( this.state.isCommentClick ) {
            edt =   <div className="thumbnail">
                        <textarea className="form-control comment" rows="2"></textarea>
                        <a className="btn btn-default">Bình luận</a>
                        <a className="btn btn-default" onClick={this.onCancelComment}>Hủy</a>
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
            <div className="thumbnail row2">
                <div className="caption">
                    {/* <h5>idnews ={this.props.idNews}</h5>
                    <h5>title ={this.props.title}</h5>
                    <h5>content ={this.props.content}</h5>
                    <h5>iduser ={this.props.iduser}</h5>
                    <h5>fullname ={this.props.fullname}</h5>
                    <h5>date ={this.props.date}</h5>
                    <h5>views ={this.props.views}</h5>
                    <h5>like ={this.props.likes}</h5> */}

                    <h3>{ this.props.title }</h3>
                    <b className="detail">{ this.props.fullname }</b><span className="detail"> đã đăng vào </span><i className="detail">{ this.props.date }..{this.props.views} views</i>
                    <p>
                    { this.props.content.length>250?this.props.content.substring(0,150).concat('......'):this.props.content }
                    </p>
                    <button className="btn btn-default " onClick={this.fullNews}>Xem them </button>
                    <hr/>
                    <p>
                        <a  className={ this.state.isLike?"btn btnliked":"btn btnlike"} onClick={ this.onClickLike}> </a>
                        <b onClick={ this.onNumLikesClick } className='btn-num-like'> { this.props.likes } </b>
                        {
                            this.props.idlogin===this.props.iduser?<a  className="btndelete">X</a>:''
                        }
                        {
                            this.props.idlogin===this.props.iduser?<a  className="btnedit">..</a>:''
                        }
                        <a  className="btn btncomment" onClick={ this.onClickComment }> </a>
                        <b>{ this.props.comments }</b>
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
    }
}

const MapDispatchToProps = {
    at_news_toggle_like
}
export default connect(MapStateToProps, MapDispatchToProps)(ItemNews);