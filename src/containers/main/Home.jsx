import React, { Component } from 'react';
import FormAddNews from '../../components/FormAddNews';
import ItemHotRecent from './ItemHotRecent';
import {connect} from 'react-redux'
import { at_account_login } from '../../actions/actionAccount';
import { atx_getdata  } from '../../actions/actionCommon';

class Home extends Component {
  componentWillMount(){
    if (localStorage.getItem('account') !== null){
      this.props.at_account_login(JSON.parse(localStorage.getItem('account')));
    }
    this.props.atx_getdata();
  }
  render() {
    return (
        <div className="container">
            { this.props.isLogin?<FormAddNews />:''}
            <ItemHotRecent />
        </div>
    );
  }
}

function MapStateToProps(state){
  return {
      isLogin: state.reducerAccount.isLogin?true:false,
  }
}

// export default connect(MapStateToProps, null)(Home);

const MapDispatchToProps = {
  at_account_login,
  atx_getdata
}

export default connect(MapStateToProps, MapDispatchToProps)(Home);