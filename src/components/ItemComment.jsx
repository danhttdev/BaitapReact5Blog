import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ItemComment extends Component {
  render() {
    return (
        <div className="thumbnail rowinput thumbnailme">
            <div className="caption">
                <Link className="detail" to={'/contact/'+this.props.iduser} >{ this.props.username } </Link>
                 đã bình luận  
                <span> </span>
                <i className="fa fa-clock-o" aria-hidden="true"> </i>
                <i> { this.props.date } </i>
                <i className="fa fa-spinner fa-spin" > </i> 
                <p>{ this.props.content }</p>
            </div>
        </div>
    );
  }
}

export default ItemComment;
