import React, { Component } from 'react';

class ItemNewsFull extends Component {
  render() {
    return (
        <div className="row ">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                <div className="thumbnail row2">
                    <div className="caption">
                        <h3>Facebook đã tạo hiệu ứng xoxo như thế nào?</h3>
                        <b className="detail">Danhtan</b><span className="detail"> đã đăng vào </span><i className="detail">20/10/2017</i>
                        <p>
                        Trong quá trình đi làm, nhất là nếu làm frontend thì chắc chắn sẽ có một lúc nào đó các bạn bị 
                        Chrome (trình duyệt nói chung) chửi vô mặt những thứ đại loại liên quan
                        đến cái của nợ Access-Control-Allow-Origin header. Tôi đã từng nghĩ 
                        đại đa số các bạn làm Web developer đều …
                        </p>
                        <p>
                            <a  className="btn btnlike"> </a>
                            <a  className="btndelete">X</a>
                            <a  className="btn btncomment"> </a>
                        </p>
                    </div>
                    <div className="thumbnail">
                        <textarea className="form-control comment" rows="2"></textarea>
                        <a  className="btn btn-default">Post</a>
                        <a  className="btn btn-default">Cancel</a>
                    </div>
                    <div className="thumbnail rowinput thumbnailme">
                        <div className="caption">
                            <b>Danhtan</b>
                            <p>
                                Vui nhỉ
                            </p>
                        </div>
                    </div>
                    <div className="thumbnail rowinput thumbnailme">
                        <div className="caption">
                            <b>Tinh phan</b>
                            <p>
                                =))
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default ItemNewsFull;
