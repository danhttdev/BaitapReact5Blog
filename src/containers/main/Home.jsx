import React, { Component } from 'react';
import FormAddNews from '../../components/FormAddNews';
import ItemHotRecent from './ItemHotRecent';
import {connect} from 'react-redux'
import ItemNewsFull from '../ItemNewsFull';

class Home extends Component {
  render() {
    return (
        <div className="container">
            { this.props.idlogin?<FormAddNews />:''}
            <ItemHotRecent />
            <ItemNewsFull />
        </div>
    );
  }
}

function MapStateToProps(state){
  return {
      idlogin: state.reducerAccount.userlogin?state.reducerAccount.userlogin.idlogin:null,
  }
}

export default connect(MapStateToProps, null)(Home);