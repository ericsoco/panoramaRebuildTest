'use strict';

import React, { Component } from 'react';

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
        {/*
        <h2>Area Chart</h2>
        <AreaChartExample />
        */}
      </div>
    );

  }

}