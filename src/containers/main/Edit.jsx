import React, { Component } from 'react';
import {connect} from 'react-redux'
// import ItemNewsFull from '../ItemNewsFull';
import { atx_news_get_a_news } from '../../actions/actionNews';
import FormEditNews from '../../components/FormEditNews';

const uuid = require('uuid');
class Edit extends Component {
    constructor(props){
        super(props);
        this.state = {
            item_news:null
        }
    }
    componentWillMount(){
        // if (localStorage.getItem('account')===null){
        //     this.props.history.push("/");
        // }
        // else {


            // const idindex = window.location.pathname.substring(6);
            const idindex = +this.props.match.params.idEdit;

            console.log(this.props)
            // console.log('idindex: '+ idindex);
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
        // }
    }
    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {
                    this.state.item_news!==null?
                            <FormEditNews 
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
    atx_news_get_a_news
}

export default connect(MapStateToProps, MapDispatchToProps)(Edit);