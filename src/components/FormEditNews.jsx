import React, { Component } from 'react';


class FormEditNews extends Component {
  render() {
    return (
        <div class="row ">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div class="thumbnail row2">
                        <form >
                            <legend>Sửa bài đăng</legend>
                            <div class="form-group">
                                <label for="">Tiêu đề</label>
                                <input type="text" class="form-control" id="" placeholder="Input field"/>
                                <label for="">Nội dung</label>
                                <input type="text" class="form-control" id="" placeholder="Input field"/>
                            </div>
                            <button type="submit" class="btn btn-primary">Sửa</button>
                            <button type="reset" class="btn btn-danger">Xóa</button>
                            <button type="button" class="btn btn-warning">Hủy</button>
                        </form>
                    </div>
                </div>
            </div>
        </div> 
    );
  }
}

export default FormEditNews;
