import React, { Component } from 'react';
import CounterContainer from '../containers/CounterContatiner';
import AppTemplate from './AppTemplate';
import TestDataFromDB from './TestDataFromDB';

class App extends Component {
  render() {
    return (
      <AppTemplate
        testdata={<TestDataFromDB />}
        counter={<CounterContainer />}
      />
    );
  }
}

export default App;
