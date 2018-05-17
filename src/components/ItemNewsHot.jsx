import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ItemNewsHot extends Component {
  render() {
    return (
        <div className="thumbnail rowinput thumbnailme">
            <Link to={'/fullnews/'+this.props.idNews}> 
            <div className="caption">
                <b>{this.props.title}</b><br />
                <p className="text-muted">
                    <Link className="detail" to={'/contact/'+this.props.iduser} >{ this.props.fullname } </Link>
                    <i className="detail">{this.props.date}</i>
                </p>
                <p className="detail"> 
                    <i className="fa fa-spinner fa-spin" > </i>
                    <b> {this.props.views} </b> lượt xem,  
                    <i className="fa fa-thumbs-o-up"></i>
                    <b> {this.props.likes} </b>,  
                    <i className="fa fa-commenting-o"> </i> 
                    <b> {this.props.comments} </b> 
                </p>
            </div>
            </Link>
        </div>
    );
  }
}

export default ItemNewsHot;
