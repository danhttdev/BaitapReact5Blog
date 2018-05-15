import React, { Component } from 'react';
import {connect} from 'react-redux'
// import ItemNewsFull from '../ItemNewsFull';

import { 
    atx_news_get_a_news, 
} from '../../actions/actionNews';
import {
    atx_getdata,
} from '../../actions/actionCommon';
import { at_account_set_login_true} from '../../actions/actionAccount';
import ItemNewsFull from '../../components/ItemNewsFull';

const uuid = require('uuid');
class FullNews extends Component {
    constructor(props){
        super(props);
        this.state = {
            item_news:null
        }
    }
    componentWillMount(){
        const account = JSON.parse(localStorage.getItem('account'));
        if ( account !== null ){
            this.props.at_account_set_login_true();
        }
        const idindex = window.location.pathname.substring(10);
        if(!idindex){
            this.props.history.push("/");
        }
        if ( this.props.isLoaded ){
            const item_news2 = this.props.news.filter((item) => {
                if ( item.idnews === parseInt(idindex,10) ) return true;
                else return false;
            })[0];
            this.setState({
                item_news:{...item_news2}
            })
        }
        else {
            const cb = (itemnews) => {
                this.setState({
                    item_news:{...itemnews}
                })
            }
            this.props.atx_news_get_a_news(idindex, cb);
        }
    }
    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {
                    this.state.item_news!==null?
                            <ItemNewsFull 
                                key={uuid()}
                                idNews= { this.state.item_news.idnews}
                                title= { this.state.item_news.title }
                                content= { this.state.item_news.content } 
                                iduser= { this.state.item_news.iduser }
                                fullname= { this.state.item_news.fullname }
                                date= { this.state.item_news.date }
                                views={this.state.item_news.views}
                                arrComments= { this.state.item_news.arrComments }
                                likes= { this.state.item_news.arrLikes.length}
                                comments= { this.state.item_news.arrComments.length }
                                arrLikes={this.state.item_news.arrLikes}
                                history={this.props.history}
                            />:''
                }
            </div>
        );
    }
}

function MapStateToProps(state){
    return {
        news: state.reducerNews.news,
        isLoaded: state.reducerCommon.isLoaded
    }
}
const MapDispatchToProps = {
    atx_news_get_a_news,
    atx_getdata,
    at_account_set_login_true
    
}

export default connect(MapStateToProps, MapDispatchToProps)(FullNews);