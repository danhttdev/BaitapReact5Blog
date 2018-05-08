import React, { Component } from 'react';

class CardAccount extends Component {
  render() {
    return (
        <div class="col-xs-8 col-sm-6 col-md-4 col-lg-3">
            <div class="thumbnail row2">
                <legend>Danh tan</legend>
                <img src="img/male.png" class="img-responsive"/>
                <label for="">Tên: </label><i>Danh</i><br />
                <label for="">Địa chỉ: </label><i>123 Ngô quyền</i><br />
                <label for="">SĐT: </label><i>0114353442</i>
            </div>
        </div>
    );
  }
}

export default CardAccount;
