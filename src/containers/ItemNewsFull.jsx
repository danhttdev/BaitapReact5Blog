import React, { Component } from 'react';

class ItemNewsFull extends Component {
  render() {
    return (
        <div class="row ">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                <div class="thumbnail row2">
                    <div class="caption">
                        <h3>Facebook đã tạo hiệu ứng xoxo như thế nào?</h3>
                        <b class="detail">Danhtan</b><span class="detail"> đã đăng vào </span><i class="detail">20/10/2017</i>
                        <p>
                        Trong quá trình đi làm, nhất là nếu làm frontend thì chắc chắn sẽ có một lúc nào đó các bạn bị 
                        Chrome (trình duyệt nói chung) chửi vô mặt những thứ đại loại liên quan
                        đến cái của nợ Access-Control-Allow-Origin header. Tôi đã từng nghĩ 
                        đại đa số các bạn làm Web developer đều …
                        </p>
                        <p>
                            <a  class="btn btnlike"> </a>
                            <a  class="btndelete">X</a>
                            <a  class="btn btncomment"> </a>
                        </p>
                    </div>
                    <div class="thumbnail">
                        <textarea class="form-control comment" rows="2"></textarea>
                        <a  class="btn btn-default">Post</a>
                        <a  class="btn btn-default">Cancel</a>
                    </div>
                    <div class="thumbnail rowinput thumbnailme">
                        <div class="caption">
                            <b>Danhtan</b>
                            <p>
                                Vui nhỉ
                            </p>
                        </div>
                    </div>
                    <div class="thumbnail rowinput thumbnailme">
                        <div class="caption">
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
