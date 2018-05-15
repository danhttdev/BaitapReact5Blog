import React, { Component } from 'react';
import ItemNews from '../containers/main/itemhotrecent/ItemNews';
import { connect } from 'react-redux';
const uuid = require('uuid');

class ListItemNews extends Component {
  render() {
    var arr_sort= this.props.news.sort(function (a, b) {
        var nameA = a.date.toUpperCase(); // ignore upper and lowercase
        var nameB = b.date.toUpperCase(); // ignore upper and lowercase
        if (nameA > nameB) return -1;
        if (nameA < nameB) return 1; return 0;
      });

    return (
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            {
                arr_sort.map((item) => {
                    return <ItemNews 
                        key={uuid()}
                        idNews= { item.idnews}
                        title= { item.title }
                        content= { item.content } 
                        iduser= { item.iduser }
                        fullname= { item.fullname }
                        date= { item.date }
                        views={item.views}
                        arrComments= { item.arrComments }
                        likes= { item.arrLikes.length }
                        comments= { item.arrComments.length }
                        arrLikes={item.arrLikes}
                    />
                })
            }
        </div>
    );
  }
}

function mapStateToProps(state) {
    return {
      news: state.reducerNews.news
    };
}
  
// const mapDispatchToProps = {
    
// }

export default connect(mapStateToProps,null)(ListItemNews);