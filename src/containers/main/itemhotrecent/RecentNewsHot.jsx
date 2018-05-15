import React, { Component } from 'react';
import { connect } from "react-redux";
import ItemNewsHot from '../../../components/ItemNewsHot';
const uuid = require('uuid');

class RecentNewsHot extends Component {
    render() {
        var arr_sort= this.props.news.sort(function (a, b) {
            return b.views - a.views;
        });
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="thumbnail row2 news-view-est">
                    <div className="caption">
                        <h3>Bài viết xem nhiều nhất</h3>
                    </div>
                    { arr_sort.map((item) => {
                        return  <ItemNewsHot 
                                    key={uuid()}
                                    title={item.title}
                                    date={item.date}
                                    views={item.views}
                                    likes={item.arrLikes.length}
                                    idNews={item.idnews}
                                    comments={item.arrComments.length}
                                />
                    })}
                </div>
            </div>
        );
    }
}

function MapStateToProps(state){
    return {
        news: state.reducerNews.news
    }
}
export default connect(MapStateToProps, null)(RecentNewsHot);