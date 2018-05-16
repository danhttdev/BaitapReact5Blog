import React, { Component } from 'react';
import CardAccount from './CardAccount';

class ListAccounts extends Component {
  render() {
    return (
        <div className="row ">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                <CardAccount />
                <CardAccount />
                <CardAccount />
                <CardAccount />
                <CardAccount />
                <CardAccount />
            </div>
        </div> 
    );
  }
}

export default ListAccounts;
