import React, { Component } from 'react';

class CardAccount extends Component {
  render() {
    return (
        <div className="col-xs-8 col-sm-6 col-md-4 col-lg-3">
            <div className="thumbnail row2">
                <legend>Danh tan</legend>
                <img src="img/male.png" className="img-responsive"/>
                <label htmlFor="">Tên: </label><i>{this.props.fullname}</i><br />
                <label htmlFor="">Địa chỉ: </label><i>{this.props.address}</i><br />
                <label htmlFor="">SĐT: </label><i>{this.props.phone}</i><br />
                <label htmlFor="">Giới tính: </label><i>{this.props.gender?"Nam":"Nữ"}</i><br />
            </div>
        </div>
    );
  }
}

export default CardAccount;
