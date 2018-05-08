import React, { Component } from 'react';
import ItemNews from '../ItemNews';
import RecentNewsHot from '../RecentNewsHot';

class ItemHotRecent extends Component {
  render() {
    return (
        <div class="row ">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <ItemNews />
                    <ItemNews />
                    <ItemNews />
                    <ItemNews />
                    <ItemNews />
                </div>
                <RecentNewsHot />
            </div>
        </div>
    );
  }
}

export default ItemHotRecent;
