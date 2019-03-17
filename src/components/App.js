import React, { Component } from 'react';
import AppTemplate from './AppTemplate';

// import CounterContainer from '../containers/CounterContatiner';
import TestDataFromDB from './TestDataFromDB';
import PicWorldMap from './PicWorldMap';

class App extends Component {
  render() {
    return (
      <AppTemplate
        testFrame1={<TestDataFromDB />}
        testFrame2={<PicWorldMap />}
      />
    );
  }
}

export default App;
