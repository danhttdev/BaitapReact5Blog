import React, { Component } from 'react';


class FormLogin extends Component {
  render() {
    return (
        <div class="row ">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div class="thumbnail row2">
                        <form >
                            <legend>Đăng nhập</legend>
                            <div class="form-group">
                                <label for="">Tên đăng nhập</label>
                                <input type="text" class="form-control" id="" placeholder="Input field"/>
                                <label for="">Mật khẩu</label>
                                <input type="text" class="form-control" id="" placeholder="Input field"/>
                            </div>
                            <button type="submit" class="btn btn-primary">ĐĂNG NHẬP</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default FormLogin;
