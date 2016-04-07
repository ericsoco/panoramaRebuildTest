import React from 'react';

import itemSelectorData from './data/itemSelector.json';
import ItemSelector from '@stamen/panorama-rebuild/src/ItemSelector';   // TODO: this should be '@stamen/panorama-rebuild/itemSelector'

import AreaChartExample from './example-areachart.jsx';

export default class App extends React.Component {

  static displayName = 'App';

  constructor (props) {

    super(props);

    this.state = {

      itemSelector: {
        title: 'Select an item:',
        items: itemSelectorData
      }

    };

  }

  render () {

    return (
      <div>
        <h1>Panorama Toolkit examples</h1>
        <hr />
        <h2>Area Chart</h2>
        <AreaChartExample />
        <h2>Item Selector</h2>
        <ItemSelector { ...this.state.itemSelector } />
      </div>
    );

  }

}