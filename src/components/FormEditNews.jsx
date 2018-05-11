import React, { Component } from 'react';


class FormEditNews extends Component {
  render() {
    return (
        <div className="row ">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="thumbnail row2">
                        <form >
                            <legend>Sửa bài đăng</legend>
                            <div className="form-group">
                                <label htmlFor="">Tiêu đề</label>
                                <input type="text" className="form-control" id="" placeholder="Input field"/>
                                <label htmlFor="">Nội dung</label>
                                <input type="text" className="form-control" id="" placeholder="Input field"/>
                            </div>
                            <button type="submit" className="btn btn-primary">Sửa</button>
                            <button type="reset" className="btn btn-danger">Xóa</button>
                            <button type="button" className="btn btn-warning">Hủy</button>
                        </form>
                    </div>
                </div>
            </div>
        </div> 
    );
  }
}

export default FormEditNews;
