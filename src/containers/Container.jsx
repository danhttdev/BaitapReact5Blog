import React, { Component } from 'react';
import FormLogin from '../components/FormLogin';
import FormSignup from '../components/FormSignup';
import FormEditNews from '../components/FormEditNews';
import FormAddNews from '../components/FormAddNews';
import ItemNewsFull from './ItemNewsFull';
import ItemHotRecent from './main/ItemHotRecent';
import ListAccounts from '../components/ListAccounts';

class Container extends Component {
  render() {
    return (
        <div>
            <nav class="navbar navbar-inverse">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="menu">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" >MyBlog.net</a>
                    </div>
                    <div class="collapse navbar-collapse" id="menu">
                        <ul class="nav navbar-nav">
                            <li>
                                <a >Tin mới</a>
                            </li>
                            <li>
                                <a >Liên Hệ</a>
                            </li>
                        </ul>
            
                        <div class="navbar-right">
                            <button class="btn btn-danger navbar-btn btn-nav">Đăng kí</button>
                            <button class="btn btn-info navbar-btn btn-nav">Đăng nhập</button>
                            <button class="btn btn-default dropdown-toggle btn-nav" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
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
            
            <div class="container">
                <FormAddNews />
                <ItemHotRecent />
                <FormLogin />
                <FormSignup />
                <FormEditNews /> 
                <ItemNewsFull />
                <ListAccounts />
            </div>
        </div>
    );
  }
}

export default Container;
