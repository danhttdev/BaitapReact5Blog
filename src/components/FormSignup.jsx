import React, { Component } from 'react';


class FormSignup extends Component {
  render() {
    return (
        <div class="row ">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div class="thumbnail row2">
                        <form >
                            <legend>Đăng kí</legend>
                            <div class="form-group">
                                <label for="">Tên đăng nhập</label>
                                <input type="text" class="form-control" id="" placeholder="Input field"/>
                                <label for="">Mật khẩu</label>
                                <input type="text" class="form-control" id="" placeholder="Input field"/>
                                <label for="">Nhập lại mật khẩu</label>
                                <input type="text" class="form-control" id="" placeholder="Input field"/>
                                <label for="">Tên đầy đủ</label>
                                <input type="text" class="form-control" id="" placeholder="Input field"/>
                                <label for="">Địa chỉ</label>
                                <input type="text" class="form-control" id="" placeholder="Input field"/>
                                <label for="">Điện thoại</label>
                                <input type="text" class="form-control" id="" placeholder="Input field"/>
                            </div>
                            <button type="submit" class="btn btn-primary">ĐĂNG KÍ</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default FormSignup;
