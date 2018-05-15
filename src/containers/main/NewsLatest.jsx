import React, { Component } from 'react';
import { connect } from "react-redux";
import ItemNewsHot from '../../components/ItemNewsHot';
import { at_account_set_login_true} from '../../actions/actionAccount';
import { sortDate } from '../../function';
const uuid = require('uuid');

class NewsLatest extends Component {

    componentWillMount(){
        const account = JSON.parse(localStorage.getItem('account'));
        if ( account !== null ){
            this.props.at_account_set_login_true();
        }
    }
    render() {
        var arr_sort= this.props.news.sort(
            sortDate
        );
    
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="thumbnail row2">
                    <div className="caption">
                        <h3>Bài viết đăng gần đây</h3>
                    </div>
                    { arr_sort.map((item) => {
                        return  <ItemNewsHot 
                                    key={uuid()}
                                    title={item.title}
                                    date={item.date}
                                    views={item.views}
                                    likes={item.likes}
                                    idNews={item.idnews}
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
const MapDispatchToProps = {
    at_account_set_login_true
    
}
export default connect(MapStateToProps, MapDispatchToProps)(NewsLatest);