import React, { Component } from 'react';

class ItemComment extends Component {
  render() {
    return (
        <div className="thumbnail rowinput thumbnailme">
            <div className="caption">
                <b>{ this.props.username }</b> đã bình luận 
                <i>, vào { this.props.date } : </i>
                <p>{ this.props.content }</p>
            </div>
        </div>
    );
  }
}

export default ItemComment;
