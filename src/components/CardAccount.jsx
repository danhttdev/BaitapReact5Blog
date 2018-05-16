import React, { Component } from 'react';

class CardAccount extends Component {
    onDetail = () => {
        this.props.history.push('/contact/'+this.props.id);
    }
    render() {
        return (
            <div className="col-xs-8 col-sm-6 col-md-4 col-lg-3">
                <div className="thumbnail row2 card-account" onClick={this.onDetail}>
                    <legend>{this.props.fullname}</legend>
                    <img src={this.props.gender?'img/male.png':'img/female.png'} className="img-responsive" alt='avatar'/>
                    <label htmlFor="">Địa chỉ: </label><i>{this.props.address}</i><br />
                    <label htmlFor="">SĐT: </label><i>{this.props.phone}</i><br />
                    <label htmlFor="">Id: </label><i>{this.props.id}</i><br />
                    <label htmlFor="">Số bài đăng: </label><i>{this.props.countnews}</i><br />
                    <label htmlFor="">Giới tính: </label><i>{this.props.gender?"Nam":"Nữ"}</i><br />
                </div>
            </div>
        );
    }
}

export default CardAccount;

