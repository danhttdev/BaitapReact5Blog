import React, { Component } from 'react';
import {connect} from 'react-redux'
import { atx_news_get_a_news } from '../../actions/actionNews';
import FormUpdateAccount from '../../components/FormUpdateAccount';
import { atx_getdata } from '../../actions/actionCommon';
import { 
    at_account_login,
    at_account_set_login_false
} from '../../actions/actionAccount';

class UpdateAccont extends Component {
    constructor(props){
        super(props);
        this.state = {
            item_news:null
        }
    }
    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {
                    this.props.userlogin?<FormUpdateAccount 
                        username={this.props.userlogin.username}
                        fullname={this.props.userlogin.fullname}
                        address={this.props.userlogin.address}
                        phone={this.props.userlogin.phone}
                        gender={ this.props.userlogin.gender}
                        id={this.props.userlogin.id}
                        history2={this.props.history}
                    />:''
                }
            </div>
        );
    }
}

function MapStateToProps(state){
    return {
        islogin: state.reducerAccount.isLogin,
        news: state.reducerNews.news,
        isLoaded: state.reducerCommon.isLoaded,
        userlogin: state.reducerAccount.userlogin
    }
}
const MapDispatchToProps = {
    atx_news_get_a_news,
    atx_getdata,
    at_account_login,
    at_account_set_login_false
}

export default connect(MapStateToProps, MapDispatchToProps)(UpdateAccont);