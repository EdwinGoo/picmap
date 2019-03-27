import React, { Component } from 'react';
import AppTemplate from './AppTemplate';
import PicWorldMap from './PicWorldMap';

class App extends Component {
  render() {
    return <AppTemplate mainFrame={<PicWorldMap />} />;
  }
}

export default App;
