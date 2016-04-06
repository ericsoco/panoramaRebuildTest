'use strict';

import React, { Component } from 'react';
import ItemSelector from '@stamen/panorama-rebuild/src/ItemSelector';   // TODO: this should be '@stamen/panorama-rebuild/itemSelector'

export default class App extends Component {

  static displayName = 'App';

  constructor (props) {

    super(props);

    this.state = {};

  }

  componentWillMount () {
    //
  }

  render () {

    return (
      <div>
        <h1>Panorama Toolkit examples</h1>
        <hr />
        <h2>Item Selector</h2>
        <ItemSelector/>
      </div>
    );

  }

}