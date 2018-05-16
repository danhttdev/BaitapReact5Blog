import React, { Component } from 'react';
import Main from './Main';
import Navigation from './Navigation';

class Container extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Main />
      </div>
    );
  }
}
export default Container;