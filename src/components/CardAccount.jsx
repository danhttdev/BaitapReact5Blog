import React, { Component } from 'react';

class CardAccount extends Component {
  render() {
    return (
        <div className="col-xs-8 col-sm-6 col-md-4 col-lg-3">
            <div className="thumbnail row2">
                <legend>Danh tan</legend>
                <img src="img/male.png" className="img-responsive"/>
                <label htmlFor="">Tên: </label><i>Danh</i><br />
                <label htmlFor="">Địa chỉ: </label><i>123 Ngô quyền</i><br />
                <label htmlFor="">SĐT: </label><i>0114353442</i>
            </div>
        </div>
    );
  }
}

export default CardAccount;
