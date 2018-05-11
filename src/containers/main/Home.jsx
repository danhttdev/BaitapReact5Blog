import React, { Component } from 'react';
import FormAddNews from '../../components/FormAddNews';
import ItemHotRecent from './ItemHotRecent';
import {connect} from 'react-redux'
import ItemNewsFull from '../ItemNewsFull';

class Home extends Component {
  render() {
    return (
        <div className="container">
            { this.props.isLogin?<FormAddNews />:''}
            <ItemHotRecent />
            <ItemNewsFull />
        </div>
    );
  }
}

function MapStateToProps(state){
  return {
      isLogin: state.reducerAccount.isLogin?true:false,
  }
}

export default connect(MapStateToProps, null)(Home);