import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom'

class Error extends Component {
  render() {
    return (
        <nav class="navbar navbar-inverse">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#menu">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <Link to='/' className='navbar-brand'>MyBlog.net</Link>

            </div>
            <div class="collapse navbar-collapse" id="menu">
                <ul class="nav navbar-nav">
                    <li>
                        <Link to='/newslatest' className='navbar-brand'>Tin mới</Link>
                    </li>
                    <li>
                        <Link to='/contact' className='navbar-brand'>Liên hệ</Link>
                    </li>
                </ul>
    
                <div class="navbar-right">
                    <Link to='/login' className="btn btn-warning navbar-btn btn-nav">Đăng nhập</Link>
                    <Link to='/signup' className="btn btn-info navbar-btn btn-nav">Đăng kí</Link>
                    <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Tùy chọn
                        <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li><a >Đăng kí</a></li>
                        <li><a >Đăng xuất</a></li>
                        <li role="separator" class="divider"></li>
                        <li><a >Về chúng tôi</a></li>
                    </ul>
                </div>
                
            </div>
        </div>
    </nav>
    
    );
  }
}


export default connect(null, null)(Error);