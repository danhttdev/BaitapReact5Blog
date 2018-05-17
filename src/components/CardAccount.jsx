import React, { Component } from 'react';

class CardAccount extends Component {
    onDetail = () => {
        this.props.history.push('/contact/'+this.props.id);
    }
    render() {
        return (
            <div className="col-xs-8 col-sm-6 col-md-4 col-lg-3">
                <div className="thumbnail  card-account" onClick={this.onDetail}>
                    <legend>{this.props.fullname}</legend>
                    
                    {/* <img src={this.props.gender?'img/male.png':'img/female.png'} className="img-responsive" alt='avatar'/> */}
                    <img src={this.props.gender?'http://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png':'http://www.hotellaginestra.it/wp-content/uploads/2016/06/person-girl-flat.png'} className="img-responsive" alt='avatar'/>
                    <label className="card" htmlFor="">Số bài đăng: </label><i>{this.props.countnews}</i><br />
                    <label className="card" htmlFor="">Giới tính: </label><i>{this.props.gender?"Nam":"Nữ"}</i><br />
                </div>
            </div>
        );
    }
}

export default CardAccount;

