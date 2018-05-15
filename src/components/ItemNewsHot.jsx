import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ItemNewsHot extends Component {
  render() {
    return (
        <div className="thumbnail rowinput thumbnailme">
            <Link to={'/fullnews/'+this.props.idNews}> 
            <div className="caption">
                <b>{this.props.title}</b>
                <p><i className="detail">{this.props.date}, <b>{this.props.views}</b> lượt xem, <b>{this.props.likes}</b> lượt thích, <b>{this.props.comments}</b> bình luận.</i></p>

            </div>
            </Link>
        </div>
    );
  }
}

export default ItemNewsHot;
