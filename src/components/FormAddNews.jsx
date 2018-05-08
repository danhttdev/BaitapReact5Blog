import React, { Component } from 'react';


class FormAddNews extends Component {
  render() {
    return (
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div class="thumbnail rowpost ">
                        <label for="">Tiêu đề</label>
                        <textarea class="form-control comment" rows="1"></textarea>
                        <label for="">Nội dung</label>
                        <textarea class="row3 " rows="3"></textarea>
                        <a  class="btn btn-primary">Đăng</a>
                        <a  class="btn btn-danger">Hủy</a>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default FormAddNews;
