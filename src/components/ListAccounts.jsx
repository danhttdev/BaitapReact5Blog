import React, { Component } from 'react';
import CardAccount from './CardAccount';

class ListAccounts extends Component {
  render() {
    return (
        <div class="row ">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
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
