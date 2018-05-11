import React, { Component } from 'react';

class ItemLike extends Component {
  render() {
    return (
        <div className="thumbnail rowinput thumbnailme">
            <div className="caption">
                <b>{ this.props.username }</b> đã thích, ngày 
                <i> { this.props.date }</i>
            </div>
        </div>
    );
  }
}

export default ItemLike;
