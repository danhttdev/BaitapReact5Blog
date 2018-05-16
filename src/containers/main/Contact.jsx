import React, { Component } from 'react';
import CardAccount from '../../components/CardAccount';
import { connect } from 'react-redux';
import { atx_getdata } from '../../actions/actionCommon';
import { 
    at_account_login,
    at_account_set_login_false
} from '../../actions/actionAccount';
import ItemNewsHot from '../../components/ItemNewsHot';
const uuid = require('uuid');

class Contact extends Component {
    componentWillMount(){
        this.props.atx_getdata();
        const account = JSON.parse(localStorage.getItem('account'));
        if ( account !== null ){
            this.props.at_account_login(JSON.parse(localStorage.getItem('account')));
        }
        else {
            this.props.at_account_set_login_false();
        }
        
    }
    render() {
        const idindex = window.location.pathname.substring(9);
        if ( idindex === "")
        return (
            <div>
                {
                    this.props.islogin?<div className="row clearfix">
                        <p className='text-center'>Tài khoản của tôi</p><br />
                        <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                            {   this.props.userlogin===null?'':<CardAccount 
                                    id={this.props.userlogin.id}
                                    username={this.props.userlogin.username}
                                    fullname={this.props.userlogin.fullname}
                                    address={this.props.userlogin.address}
                                    phone={this.props.userlogin.phone}
                                    gender={this.props.userlogin.gender}
                                    history={this.props.history}
                                    countnews={this.props.news.filter((item2) => {
                                        if (item2.iduser === this.props.userlogin.id) return true;return false;
                                    }).length}
                                />
                            }
                        </div>
                    </div>:''
                }   
                <div className="row clearfix">
                    <p className='text-center'>Danh sách thành viên</p><br />
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        {
                            this.props.accounts.map((item) => {
                                return  <CardAccount 
                                            key={uuid()}
                                            id={item.id}
                                            username={item.username}
                                            fullname={item.fullname}
                                            address={item.address}
                                            phone={item.phone}
                                            gender={item.gender}
                                            history={this.props.history}
                                            countnews={this.props.news.filter((item2) => {
                                                if (item2.iduser === item.id) return true;return false;
                                            }).length}
                                        />
                            })
                        }
                    </div>
                    
                </div>
            </div>
        );
        else return (
                <div className="row clearfix">
                    <p className='text-center'>Danh sách thành viên</p><br />
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        {
                            this.props.accounts.map((item) => {
                                if (item.id === idindex || parseInt(item.id,10)===parseInt(idindex,10)) 
                                return  <div className='container' key={uuid()}>
                                            <div className="row">
                                                <CardAccount 
                                                    id={item.id}
                                                    username={item.username}
                                                    fullname={item.fullname}
                                                    address={item.address}
                                                    phone={item.phone}
                                                    gender={item.gender}
                                                    history={this.props.history}
                                                    countnews={this.props.news.filter((item2) => {
                                                        if (item2.iduser === item.id) return true;return false;
                                                    }).length}
                                                />
                                            </div>
                                            <div className="row">
                                                <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                                    {
                                                        this.props.news.filter((item2) => {
                                                            if (item2.iduser === item.id) return true;return false;
                                                        }).map((item) => {
                                                            return <ItemNewsHot 
                                                                        key={uuid()}
                                                                        title={item.title}
                                                                        date={item.date}
                                                                        views={item.views}
                                                                        likes={item.arrLikes.length}
                                                                        idNews={item.idnews}
                                                                        comments={item.arrComments.length}
                                                                    />
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                else return ''
                            })
                        }
                    </div>
                </div>
        );
    }
}

function MapStateToProps(state){
    return {
        userlogin: state.reducerAccount.userlogin,
        accounts: state.reducerAccount.accounts,
        islogin: state.reducerAccount.isLogin,
        news:state.reducerNews.news,
    }
}

const MapDispatchToProps = {
    atx_getdata,
    at_account_login,
    at_account_set_login_false
}

export default connect(MapStateToProps,MapDispatchToProps)(Contact);