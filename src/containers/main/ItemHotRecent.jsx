import React, { Component } from 'react';
import RecentNewsHot from './itemhotrecent/RecentNewsHot';
import ListItemNews from '../../components/ListItemNews';

class ItemHotRecent extends Component {
  render() {
    return (
        <div className="row ">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                <ListItemNews />
                <RecentNewsHot />
            </div>
        </div>
    );
  }
}

export default ItemHotRecent;
